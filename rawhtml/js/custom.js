
///*
try
{
       $('.custom1').owlCarousel({
              margin:0,
              nav:false,
              items:1,
              autoplay: true,
              loop: true,
              mouseDrag: false,
              navigation:true,
              dots:true,
      });           
}
catch(e)
{
       
}
////back top

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
}