var j = jQuery.noConflict();

(function($) {
	var body = j('body');
	var msg_success = j('#js-msg-success');
	var msg_danger = j('#js-msg-danger');

	j(document).on("ready", function(){
		// Activate bootstrap switch field status
		j('[name="status"]').bootstrapSwitch({
			size : 'small',
			onColor: 'success',
			radioAllOff: true,
			onText     : '<i class="glyphicon glyphicon-ok"></i>',
            offText    : '<i class="glyphicon glyphicon-remove"></i>',
		});

	j('.js-delete').on('click', function(e){
			e.preventDefault();

			var titles = j(this).data('titles');

			var delForm = new DeleteForm(j('#form-delete'), j(this), titles);

			delForm.submit(function(response) {
				if (response.success) {
					delForm.updateTotal(delForm.getTotal() - 1);

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
	});

	function DeleteForm(form, button, titles) {
		var item = button.closest('.item');
		var id = item.data('id');
		var action = form.attr('action').replace(':id', id);
		var total = j('#js-total');

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
})(jQuery);