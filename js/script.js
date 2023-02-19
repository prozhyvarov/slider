$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		speed: 1000,
		easing: 'ease-in-out',
		centerMode: true,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		],
		appendArrows: $('.arrows')
	});
});

