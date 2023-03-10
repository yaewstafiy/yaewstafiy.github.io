
window.addEventListener('DOMContentLoaded', () => {

  // Tabs

  const tabs = document.querySelectorAll('.tabs-header__item'),
    tabsContent = document.querySelectorAll('.tabs-content'),
    tabsParent = document.querySelector('.tabs-header__list');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabs-header__item--active')
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabs-header__item--active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabs-header__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });


  // Menu cards

  class MenuCard {
    constructor(
      src = 'img/lorem/test.jpg',
      alt = 'test',
      title = 'Lorem ipsum',
      descr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo voluptatum corporis obcaecati magni repellendus.',
      price = 10,
      parentSelector = '.menu .menu__inner',
      ...classes
    ) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price; // цена указывается в долларах
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.transfer = 60;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
        <img src="${this.src}" alt="${this.alt}">
        <h3 class="menu__item-title">${this.title}</h3>
        <div class="menu__item-text">${this.descr}</div>
        <div class="menu__item-price">
          <div class="menu__item-cost">
            Cost:
          </div>
          <a class="menu__item-total" href="#">
            <span>${this.price}</span> USD/day
          </a>
        </div>
      `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "images/menu/1.jpg",
    "vegy",
    "Menu 'Fitness'",
    "Menu 'Fitness' is a new approach to cooking: more fresh vegetables and fruits. Product of active and healthy people. This is a brand new product with the best price and high quality!",
    10
  ).render();

  new MenuCard(
    "images/menu/2.jpg",
    "post",
    "Menu 'Lenten'",
    "The 'Lenten' menu is a careful selection of ingredients: the complete absence of animal products, milk from almonds, oats, coconut or buckwheat, the right amount of protein from tofu and imported vegetarian steaks.",
    14
  ).render();

  new MenuCard(
    "images/menu/3.jpg",
    "elite",
    "Menu 'Premium'",
    "In the 'Premium' menu, we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!",
    20
  ).render();

  // {
  //   "img": "images/menu/1.jpg",
  //   "altimg": "vegy",
  //   "title": "Menu 'Fitness'",
  //   "descr": "Menu 'Fitness' is a new approach to cooking: more fresh vegetables and fruits. Product of active and healthy people. This is a brand new product with the best price and high quality!",
  //   "price": 10
  // },


  // const getResource = async (url) => {
  //   const res = await fetch(url);

  //   if (!res.ok) {
  //     throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
  //   }

  //   return await res.json();
  // };

  // getResource('http://localhost:3000/menu')
  //   .then(data => {
  //     data.forEach(({ img, altimg, title, descr, price }) => {
  //       new MenuCard(img, altimg, title, descr, price).render();
  //     })
  //   });


  // Swiper

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 5000,
    },
  });

  // Modal Window

  const modalWindow = document.querySelector('.modal'),
    modalButton = document.querySelector('[data-modal]');

  function closeModal() {
    modalWindow.classList.remove('show-modal');
    modalWindow.classList.add('hide');
    document.body.style.overflow = '';
  }

  function openModal() {
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show-modal');
    modalWindow.classList.add('been-opened'); // добавляет класс, символизирующий, что модальное окно уже было открыто 1 раз
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); // удаляется setTimeOut у появления модального окна
  }

  function openModalWithTimeOut(time) {
    setTimeout(openModal, time);
  }

  function showModalByScroll() {
    if ((window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) && !(modalWindow.classList.contains('been-opened'))) {
      openModalWithTimeOut(0);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  modalButton.addEventListener('click', openModal);

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow || e.target.getAttribute('data-modal-close') === '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show-modal')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 30_000); // открывает модальное окно по истечению 30 секунд (30.000 миллисекунд)

  window.addEventListener('scroll', showModalByScroll);



  // Timer

  const deadline = '2023-05-20';

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    // Если время закончилось, таймер удаляется и появляется надпись "Акция завершена!"
    if (t <= 0) {
      document.querySelectorAll('.timer__block').forEach(item => {
        item.remove();
      });
      const timeIsOverText = 'Акция завершена!';
      document.querySelector('.timer').classList.add('timeisover');
      document.querySelector('.timer').append(timeIsOverText);
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / (1000 * 60)) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

  }

  setClock('.timer', deadline);


  // Form sending

  const forms = document.querySelectorAll('form');

  forms.forEach(item => {
    item.addEventListener('change', () => {
      const inputNames = document.querySelectorAll('input[name="name"]');
      const inputPhones = document.querySelectorAll('input[name="phone"]');

      inputNames.forEach(item => {
        localStorage.setItem('name', item.value);
      });
      inputPhones.forEach(item => {
        localStorage.setItem('phone', item.value);
      });
    });
  })

  window.addEventListener('load', () => {
    const inputNames = document.querySelectorAll('input[name="name"]');
    const inputPhones = document.querySelectorAll('input[name="phone"]');

    inputNames.forEach(item => {
      item.value = localStorage.getItem('name') || '';
    })
    inputPhones.forEach(item => {
      item.value = localStorage.getItem('phone') || '';
    })
  });

  const message = {
    loading: 'images/form/spin-onload.svg',
    success: 'Thanks! <br> We will contact you soon',
    failure: 'Error'
  }

  forms.forEach(item => {
    bindPostData(item);
  })

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  }

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 15px auto 0;
      `;
      // document.querySelector('.modal__content').style.paddingBottom = '20px';
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        })
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    prevModalDialog.classList.remove('show');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-modal-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
      // document.querySelector('.modal__content').style.paddingBottom = '40px';
    }, 4000)
  }


  // Calculator 

  const result = document.querySelector('.calc__total-result span');
  let sex, ratio, height, weight, age;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'male';
    localStorage.setItem('sex', 'male');
  }
  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.55;
    localStorage.setItem('ratio', 1.55);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    })
  }

  initLocalSettings('#gender div', 'calc__choose-item--active');
  initLocalSettings('.calc__physical div', 'calc__choose-item--active');


  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = 'Fill in all items';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  }

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass)

        calcTotal();
      });

    })


  }

  getStaticInformation('#gender div', 'calc__choose-item--active');
  getStaticInformation('.calc__physical div', 'calc__choose-item--active');

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

      if (input.value.match(/\D/g)) {
        input.style.border = '3px solid red';
      } else if (input.value == '') {
        input.style.border = 'none';
      } else {
        input.style.border = '3px solid green';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');


  // Burger menu on mobile devices 

  const navModal = document.querySelector('.nav-modal'),
    navModalList = document.querySelector('.nav-modal__container'),
    burgerButton = document.querySelector('.burger-menu');

  function closeNavModal() {
    navModalList.classList.add('hide');
    navModalList.classList.remove('show-nav-modal');
    document.body.style.overflow = '';
  }

  function openNavModal() {
    navModalList.classList.add('show-nav-modal');
    navModalList.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  burgerButton.addEventListener('click', openNavModal);

  navModalList.addEventListener('click', (e) => {
    if (e.target === navModalList || e.target.getAttribute('data-burger-close') === '') {
      closeNavModal();
    }
  });

  // Input appearance on click

  document.querySelector('.search-block svg').addEventListener('click', () => {
    document.querySelector('.search-block__input').classList.add('show-input');
  });

  // Scroll

  const headerNavList = document.querySelectorAll('.header__nav-item a'),
    headerNavModal = document.querySelectorAll('.nav-modal__list-item a'),
    dataScrollItems = document.querySelectorAll('[data-scroll]');

  // Нахожу элементы в HTML структуре с дата атрибутом Scroll
  // После чего для каждого элемента headerNavList и headerNavModal я добавляю обработчик событий на скролл с функцией closeNavModal, которая закрывает бургер меню
  
  function scrollToPage(directionDataScroll) {
    window.scrollTo({
      top: directionDataScroll.offsetTop - 75,
      behavior: 'smooth'
    });
  }
  
  headerNavList.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToPage(dataScrollItems[i]);
    });

    headerNavModal[i].addEventListener('click', (e) => {
      e.preventDefault();
      scrollToPage(dataScrollItems[i]);
      closeNavModal();
    });
  })

});
