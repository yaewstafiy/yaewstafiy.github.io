window.addEventListener('DOMContentLoaded', () => {

  // TABS

  const tabsContent = document.querySelectorAll('.features-tabs__content-item'),
    tabsParent = document.querySelector('.features-tabs__btn'),
    tabs = document.querySelectorAll('.features-tabs__btn-item');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show-grid', 'fade');
    });

    tabs.forEach(tab => {
      tab.classList.remove('features-tabs__btn-item--active')
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show-grid', 'fade');
    tabsContent[i].classList.remove('hide');

    tabs[i].classList.add('features-tabs__btn-item--active');

  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('features-tabs__btn-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });


  // BURGER MENU

  const burgerButton = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay');

  function closeMenu() {
    burgerButton.classList.remove('burger--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = '';
  }

  function closeOverlay(e) {
    if (
      e.target !== overlay &&
      !overlay.contains(e.target) &&
      e.target !== burgerButton
    ) {
      closeMenu();
    }
  }

  burgerButton.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay--active');
    burgerButton.classList.toggle('burger--active');

    if (burgerButton.classList.contains('burger--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && overlay.classList.contains('overlay--active')) {
      closeMenu();
    }
  });

  // Закрытие меню по клику на площадь рядом с оверлеем

  window.addEventListener('click', closeOverlay);


  // Добавление формы в меню

  const newForm = document.createElement('form');
  newForm.classList.add('menu-form');
  newForm.innerHTML = `
    <div class="menu-form__title">
      Contact us
    </div>
    <input class="menu-form__input" type="email">
    <input class="menu-form__input" type="tel">
    <button class="menu-form__btn" type="submit">Send</button>
  `;
  overlay.append(newForm);


  // Scroll

  const dataScrollItems = document.querySelectorAll('[data-scroll]'),
    headerLinkList = document.querySelectorAll('.header__link');

  function scrollToPage(directionDataScroll) {
    if (document.documentElement.clientWidth > 750) {
      window.scrollTo({
        top: directionDataScroll.offsetTop - 120,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: directionDataScroll.offsetTop - 76,
        behavior: 'smooth'
      })
    }
  }

  headerLinkList.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToPage(dataScrollItems[i]);

      if (overlay.classList.contains('overlay--active')) {
        closeMenu();
      }
    })
  })

  // Scroll button

  const scrollButton = document.querySelector('#slide-to-top');
  scrollButton.classList.add('invisible');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollButton.classList.remove('invisible');
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.add('invisible');
      scrollButton.classList.remove('visible');
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  });

  // Basket

  const addBtns = document.querySelectorAll('.accessories__btn'),
    basket = document.querySelector('.basket'),
    basketNumber = document.querySelector('.basket span');

  let counter = 0;

  addBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      counter++;
      if (!basket.classList.contains('basket--on')) {
        basket.classList.add('basket--on');
      }
      basketNumber.textContent = counter;
    })
  })

});

