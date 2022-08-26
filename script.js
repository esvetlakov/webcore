let expandButton = document.querySelector('.repairable-brands__expand-button');
let brandsWrapper = document.querySelector('.repairable-brands__wrapper');


expandButton.addEventListener('click', function () {
    if (expandButton.textContent === 'Показать все') {
        brandsWrapper.classList.add('expand');
        expandButton.classList.remove('expand');
        expandButton.classList.add('expand--reverse');
        expandButton.textContent = 'Скрыть';
    } else {
        brandsWrapper.classList.remove('expand');
        expandButton.classList.remove('expand--reverse');
        expandButton.classList.add('expand');
        expandButton.textContent = 'Показать все';
    };
});

window.onload = function () {
if (window.innerWidth < 768.98) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        //freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 16,
        slidesOffsetBefore: 16,
      });
    }
};