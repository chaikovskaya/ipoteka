$(document).on('change', '.js-switch-input', function(){
	$('.js-switch-list li').removeClass('is-active');
	
	if ($(this).is(':checked')){
		$('.js-switch-list li:nth-child(2)').addClass('is-active');
	} else {
		$('.js-switch-list li:nth-child(1)').addClass('is-active');
	}
});

$(document).ready(function(){
	$('.js-articles-matchheight').matchHeight({
		byRow: true,
	});
});