$(document).foundation();
$(document).ready(function () {
    $('.blog-outer').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',

nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',

        nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
      }

    },
    {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: true,
          prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
  
          nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
        }
  
      },
]
    });    
});