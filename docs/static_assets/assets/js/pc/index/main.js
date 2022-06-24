
window.onpageshow = function(event) {
  if (event.persisted) {
		 window.location.reload();
    
	}
};

(function () {
  $(".js-slick__index-hero").slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '25vw',
      
        }
      }
    ]
  });
})();

(function () {
  $(".js-slick__index-about__services").slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 400,
    centerMode: false,
    centerPadding: '30px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });
})();

$(window).on('resize orientationchange', function () {
  $('.slick-slider').slick('setPosition');
});

(function () {
  displayRecentShops("#js-recent__lists");
  if ($("#js-recent__lists li").length > 0) {
    $("#js-recent__lists__wrap").css('display', 'block');
  } else {
    $("#js-recent__lists__wrap").css('display', 'none');
  }
})();