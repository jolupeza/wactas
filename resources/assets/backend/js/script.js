var j = jQuery.noConflict();

(function($) {
	var body = j('body');
	var msg_success = j('#js-msg-success');
	var msg_danger = j('#js-msg-danger');

	j(document).on("ready", function(){
		// Activate bootstrap switch field status
		j('[name="status"], [name="type"]').bootstrapSwitch({
			size : 'small',
			onColor: 'success',
			radioAllOff: true,
			onText     : '<i class="glyphicon glyphicon-ok"></i>',
            offText    : '<i class="glyphicon glyphicon-remove"></i>',
		});

		body.on('click', '.js-delete', function(e){
			e.preventDefault();

			var $this = j(this);
			var titles = $this.data('titles');
			var displayTotal  = (typeof $this.data('total') !== 'undefined') ? $this.data('total') : false ;

			var delForm = new DeleteForm(j('#form-delete'), j(this), titles);

			delForm.submit(function(response) {
				if (response.success) {
					//console.log(response.success)
					if (displayTotal) {
						delForm.updateTotal(delForm.getTotal() - 1);
					}

					titles = titles.split(',');
					msg_success.text('Se eliminó el ' + titles[0] + '.');
					msg_success.fadeIn('slow');

					setTimeout(function(){
						msg_success.fadeOut('slow', function(){
							j(this).text('');
						});
					}, 3000);
				}
			});
		});

		// Display form by add email or phone
		j('.js-display-form').on('click', function(ev){
			ev.preventDefault();

			var $this = j(this);
			var type = $this.data('type');
			var icon = $this.data('icon');
			var form = j('#js-form-add-' + type);
			var title = $this.data('title');

			// var form = j($this.data('form'));
			// var title = (type === 'email') ? 'Email' : 'Teléfono';

			if ($this.hasClass('active')) {
				form.fadeOut('slow', function() {
					$this.html('Agregar ' + title + ' <i class="fa ' + icon + '"></i>').removeClass('btn-danger active').addClass('btn-success');
				});
				form.find('input[name="' + type + '"]').val('');
				form.data('formValidation').resetForm();
			} else {
				form.fadeIn('slow', function() {
					$this.html('Cancelar <i class="fa ' + icon + '">').removeClass('btn-success').addClass('btn-danger active');
					form.find('input[name="' + type + '"]').focus();
				});
			}
		});

		j('#js-form-add-email').formValidation({
            locale: 'es_ES',
			framework: 'bootstrap',
			icon: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
		}).on('err.field.fv', function(e, data) {
			var field = e.target;
			j('small.help-block[data-bv-result="INVALID"]').addClass('hide');
	    }).on('success.form.fv', function(e){
			e.preventDefault();

			var form = j(this);
			var type = 'email';

			var addForm = new AddForm(form, j('#js-add-' + type));

			addForm.submit(function(response) {
				if (response.success) {
					var table = j('#js-table-' + type);
					var content = '<tr data-id="' + response.employeeEmail.id + '" class="item">'
        		    				+ '<td>' + response.employeeEmail.id + '</td>'
				        		    + '<td>' + response.employeeEmail.email + '</td>'
				        		    + '<td align="center">'
				        		        + '<a href="#" class="btn btn-danger js-delete" data-titles="Email,Emails" data-total="false">x</a>'
				        		    + '</td>'
				        			+ '</tr>';

				    if (table.find('tr').first().hasClass('js-no-' + type))
				    {
				    	table.find('tr').first().remove();
				    }
					table.append(content);

					form.data('formValidation').resetForm();

					form.fadeOut('slow', function() {
						form.find('input[name="' + type + '"]').val('');
						j('#js-add' + type).html('Agregar Email <i class="fa fa-envelope-o"></i>').removeClass('active btn-danger').addClass('btn-success');
					});
				}
			});
	    });

		j('#js-form-add-phone').formValidation({
            locale: 'es_ES',
			framework: 'bootstrap',
			icon: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
		}).on('err.field.fv', function(e, data) {
			var field = e.target;
			j('small.help-block[data-bv-result="INVALID"]').addClass('hide');
	    }).on('success.form.fv', function(e){
			e.preventDefault();

			var form = j(this);
			var type = 'phone';

			var addForm = new AddForm(form, j('#js-add-' + type));

			addForm.submit(function(response) {
				if (response.success) {
					var table = j('#js-table-' + type);
					var content = '<tr data-id="' + response.employeePhone.id + '" class="item">'
        		    				+ '<td>' + response.employeePhone.id + '</td>'
				        		    + '<td>' + response.employeePhone.phone + '</td>'
				        		    + '<td align="center">'
				        		        + '<a href="#" class="btn btn-danger js-delete" data-titles="Teléfono,Teléfonos" data-total="false">x</a>'
				        		    + '</td>'
				        			+ '</tr>';

				    if (table.find('tr').first().hasClass('js-no-' + type))
				    {
				    	table.find('tr').first().remove();
				    }
					table.append(content);

					form.data('formValidation').resetForm();

					form.fadeOut('slow', function() {
						j(this).find('input[name="' + type + '"]').val('');
						j('#js-add' + type).html('Agregar Teléfono <i class="fa fa-phone"></i>').removeClass('active btn-danger').addClass('btn-success');
					});
				}
			});
	    });

		// Select customer in Dashboard
		j('.js-sel-customer').on('click', function(ev){
			ev.preventDefault();
			var $this = j(this);
			var id = $this.data('id');
			var form = j('#form-dashboard');
			var action = form.attr('action').replace(':id', id);

			j.post(action, form.serialize(), function(response) {
				if (response.success) {
					window.location = APP_URL;
				}
			}).fail(function(){
				alert('No se pudo seleccionar el cliente. Por favor vuelva a intentarlo.')
			}, 'json');
		});

		// Validate form add employee via ajax
		j('#js-form-add-employee').formValidation({
            locale: 'es_ES',
			framework: 'bootstrap',
			icon: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
		}).on('err.field.fv', function(e, data) {
			var field = e.target;
			j('small.help-block[data-bv-result="INVALID"]').addClass('hide');
	    }).on('success.form.fv', function(e){
			e.preventDefault();

			var form = j(this);
			var action = form.attr('action');
			var table = j('#js-table-members');

			j.post(action, form.serialize(), function(response) {
				// success(response);
				var content = '<tr>'
	        		    		+'<td align="center">'
	        		    			+'<input name="employee_id[]" type="checkbox" value="' + response.employee.id + '" />'
	        		    		+'</td>'
	        		    		+'<td>' + response.employee.name + '</td>'
	        					+'</tr>';
				table.append(content);
			}).fail(function(){
				msg_danger.text('No se pudo agregar. Por favor vuelve a intentarlo.');
				msg_danger.fadeIn('slow');

				setTimeout(function(){
					msg_danger.fadeOut('slow', function(){
						j(this).text('');
					});
				}, 3000);
			}, 'json');

			form.data('formValidation').resetForm(true);
			j('#md-addEmployee').modal('hide');

			/*var addForm = new AddForm(form, j('#js-add-' + type));

			addForm.submit(function(response) {
				if (response.success) {
					var table = j('#js-table-' + type);
					var content = '<tr data-id="' + response.employeeEmail.id + '" class="item">'
        		    				+ '<td>' + response.employeeEmail.id + '</td>'
				        		    + '<td>' + response.employeeEmail.email + '</td>'
				        		    + '<td align="center">'
				        		        + '<a href="#" class="btn btn-danger js-delete" data-titles="Email,Emails" data-total="false">x</a>'
				        		    + '</td>'
				        			+ '</tr>';

				    if (table.find('tr').first().hasClass('js-no-' + type))
				    {
				    	table.find('tr').first().remove();
				    }
					table.append(content);

					form.data('formValidation').resetForm();

					form.fadeOut('slow', function() {
						form.find('input[name="' + type + '"]').val('');
						j('#js-add' + type).html('Agregar Email <i class="fa fa-envelope-o"></i>').removeClass('active btn-danger').addClass('btn-success');
					});
				}
			});*/
	    });

		// To close modal add employee revalidate form
		j('#md-addEmployee').on('hide.bs.modal', function(e){
			j('#js-form-add-employee').data('formValidation').resetForm(true);
		});
	});

	function DeleteForm(form, button, titles) {
		var item = button.closest('.item');
		var id = item.data('id');
		var action = form.attr('action').replace(':id', id);
		var total = j('#js-total');

		titles = titles.split(',');

		this.getTotal = function() {
			return parseInt(total.text().split(' ')[1]);
		};

		this.updateTotal = function(numTotal) {
			var text = '';
			if (numTotal === 0) {
				text = 'No hay ' + titles[1];
			} else if (numTotal === 1) {
				text = 'Hay 1 ' + titles[0];
			} else {
				text = 'Hay ' + numTotal + ' ' + titles[1];
			}
			total.text(text);
		};

		this.submit = function(success) {
			j.post(action, form.serialize(), function(response) {
				item.fadeOut();
				success(response);
			}).fail(function(){
				msg_danger.text('No se pudo eliminar el ' + titles[0] + '. Por favor vuelve a intentarlo.');
				msg_danger.fadeIn('slow');

				setTimeout(function(){
					msg_danger.fadeOut('slow', function(){
						j(this).text('');
					});
				}, 3000);
			});
		}
	}

	function AddForm(form, button)
	{
		var action = form.attr('action');

		this.submit = function(success) {
			j.post(action, form.serialize(), function(response) {
				success(response);
			}).fail(function(){
				msg_danger.text('No se pudo agregar. Por favor vuelve a intentarlo.');
				msg_danger.fadeIn('slow');

				setTimeout(function(){
					msg_danger.fadeOut('slow', function(){
						j(this).text('');
					});
				}, 3000);
			}, 'json');
		}
	}
})(jQuery);