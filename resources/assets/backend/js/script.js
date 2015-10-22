var j = jQuery.noConflict();

(function($) {
	var body = j('body');

	j(document).on("ready", function(){
		// Activate bootstrap switch field status
		j('[name="status"]').bootstrapSwitch({
			size : 'small',
			onColor: 'success',
			radioAllOff: true,
			onText     : '<i class="glyphicon glyphicon-ok"></i>',
            offText    : '<i class="glyphicon glyphicon-remove"></i>',
		});
	});
})(jQuery);