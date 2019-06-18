$(document).ready(function(){
  var touch = $('#touch-menu');
  var menu = $('.menu');

  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  })
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 760 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 4,
  	margin: 65,
  	loop: true,
  	nav: true,
  	navText: ["<img src='img/left-arrow.png'>", "<img src='img/right-arrow.png'>"],
  	dots: false,
  	autoplay: true,
  	responsive:{
        0:{
            items:1,
            dots: true,
            nav: false
        },
        320:{
            items:2,
            dots: true,
            nav: false,
            navText: []
        },
        768:{
            items:3
        },
        1170:{
            items:4,
            nav: true
        }
    }  	
  });
});
