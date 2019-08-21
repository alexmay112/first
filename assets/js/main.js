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
        breakpoint: 640,
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

  $('.review-list__link').on('click', function (e) {
    e.preventDefault();
    
    $(this).siblings('.review-list__item-discription-wrapper').children('.review-list__item-discription').toggleClass('review-list__item-discription_expand');
    $(this).toggleClass('review-list__link_active')
  })
  $('.slick-arrow').on('click', function (e) {
    $('.review-list__item-discription').removeClass('review-list__item-discription_expand');
    $('.review-list__link').removeClass('review-list__link_active')
  })
});