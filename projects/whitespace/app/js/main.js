const menuButton = document.querySelector('.menu__btn'),
  menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', function () {
  menuList.classList.toggle('menu__list--active');
  menuButton.classList.toggle('menu__btn--active');
});

$(function () {
  $('.footer-bottom__language-btn').on('click', function () {
    $('.footer-bottom__language-btn').toggleClass('footer-bottom__language-btn--active');
    $('.footer-bottom__info-languages').slideToggle(400);
    $()
  });

  $('.clients__cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerMode: true,
          centerPadding: '250px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 851,
        settings: {
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 616,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  if ($(window).width() < 920) {
    $('.plan__cards').slick({
      centerMode: true,
      centerPadding: '150px',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            centerMode: true,
            centerPadding: '100px',
          }
        },
        {
          breakpoint: 679,
          settings: {
            centerMode: true,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 581,
          settings: {
            centerMode: false,
            dots: true,
          }
        }
      ]
    });
  }

});


