$(document).ready(function () {
  $('.weekly-list').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 659,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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