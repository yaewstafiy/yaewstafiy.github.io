$(function () {

  $('.shop__filter-btn').on('click', function () {
    $(this).toggleClass('shop__filter-btn--active')
    $('.shop__filters').slideToggle();
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active')
  });

  $('.footer-top__title--slide').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__title--active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="px" viewBox="0 0 18 18" version="1.1"><g id="surface1"><path d="M 5.613281 8.402344 L 10.394531 3.621094 C 10.726562 3.289062 11.261719 3.289062 11.585938 3.621094 L 12.382812 4.414062 C 12.710938 4.746094 12.710938 5.28125 12.382812 5.609375 L 8.996094 9 L 12.386719 12.390625 C 12.714844 12.71875 12.714844 13.253906 12.386719 13.582031 L 11.589844 14.378906 C 11.261719 14.710938 10.726562 14.710938 10.398438 14.378906 L 5.617188 9.597656 C 5.285156 9.265625 5.285156 8.734375 5.613281 8.402344 Z M 5.613281 8.402344 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="px" viewBox="0 0 18 18" version="1.1"><g id="surface1"><path d="M 12.386719 9.597656 L 7.605469 14.378906 C 7.273438 14.710938 6.738281 14.710938 6.414062 14.378906 L 5.617188 13.585938 C 5.289062 13.253906 5.289062 12.71875 5.617188 12.390625 L 9.007812 9.003906 L 5.617188 5.613281 C 5.289062 5.285156 5.289062 4.75 5.617188 4.421875 L 6.410156 3.621094 C 6.738281 3.289062 7.273438 3.289062 7.601562 3.621094 L 12.382812 8.402344 C 12.714844 8.734375 12.714844 9.265625 12.386719 9.597656 Z M 12.386719 9.597656 "/></g></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,

  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          draggable: true
        }
      }
    ]
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__flex');
  });


  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__flex');
  });

  $('.select-style, .product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.comments-form__rating--mobile').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    fullStar: true,
    starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 478.53 478.53" style="enable-background:new 0 0 478.53 478.53;" xml:space="preserve">'+
    '<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35	c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018	c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199	c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/></svg>'
  })

  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    fullStar: true,
    readOnly: true,
    starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 478.53 478.53" style="enable-background:new 0 0 478.53 478.53;" xml:space="preserve"><path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35	c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018	c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199	c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/></svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
});

function initMap() {
  const uluru = { lat: 40.71292614701123, lng: -74.00378518356489 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
    styles: [
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#a31645"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "weight": "3.79"
          },
          {
            "visibility": "on"
          },
          {
            "color": "#ffecf0"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#a31645"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "0"
          },
          {
            "lightness": "0"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#d89ca8"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "0"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
          {
            "color": "#a31645"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "lightness": "84"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#d89ca8"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#fedce3"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;