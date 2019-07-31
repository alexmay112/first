$(document).ready(function () {
  $('.weekly-list').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false
  });
  $('.review-list').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});