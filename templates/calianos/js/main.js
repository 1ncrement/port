;(function () {
	$('.bxslider').bxSlider({
		auto:true,
		pause:3500,
		autoHover:true,
		useCSS:false,
		pager:false,
		nextText:'След.',
		prevText:'Пред.'
	});
	$('.auth-slider').bxSlider({
		mode: 'fade',
		// captions: true,
		controls:false,
		// adaptiveHeight:true,
		auto:true,
		pause:2100,
		autoHover:true,
		useCSS:false,
		pager:false
	})
})();