/* Banner */
$('.banner-slider').slick({
	infinite: true,
	arrows: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 2
});
/* Rating */
$('div.rating').rating();

/* Reviews */
var $status = $('.pagingInfo');
var $slickElement = $('.slider');

$('.next').click(function(){
	$('.multiple-items').slick('slickPrev');
})

$('.prev').click(function(){
	$('.multiple-items').slick('slickNext');
})
if( screen.width < 768 ) {
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});
	$('.multiple-items').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 2,
	});
} else {
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 2;
		$status.text(i + '/' + slick.slideCount);
	});
	$('.multiple-items').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
	});
}
/* Gallery */
$('.grid').masonry({
	fitWidth: true,
	itemSelector: '.grid-item',
	horizontalOrder: true
});