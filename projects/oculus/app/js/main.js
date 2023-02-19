window.addEventListener('DOMContentLoaded', () => {

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
});

