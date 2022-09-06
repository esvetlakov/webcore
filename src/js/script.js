const sidebar = () => {
    let burgerButton = document.querySelector('.button--burger');
    let header = document.querySelector('.header');
    let sidebar = document.querySelector('.sidebar');
    let sidebarWrapper = document.querySelector('.sidebar__wrapper');
    let mainContent = document.querySelector('.main-content');
    let footer = document.querySelector('.footer');
    let closeButton = document.querySelector('.sidebar .button--close');
    
    if (window.innerWidth < 768.98) {
        burgerButton.addEventListener('click', function () {
            if ( sidebarWrapper.classList.contains('sidebar--hidden')) {
                sidebarWrapper.classList.remove('sidebar--hidden');
                sidebar.classList.remove('sidebar--hidden');
                mainContent.classList.add('main-content--hidden');
                footer.classList.add('footer--hidden');
                header.classList.add('header--hidden');
            };
        });
        closeButton.addEventListener('click', function () {
            if (!sidebarWrapper.classList.contains('sidebar--hidden')) {
                sidebarWrapper.classList.add('sidebar--hidden');
                sidebar.classList.add('sidebar--hidden');
                mainContent.classList.remove('main-content--hidden');
                footer.classList.remove('footer--hidden');
                header.classList.remove('header--hidden');
            };
        });
    } else if (768 < window.innerWidth < 1365.98) {
        burgerButton.addEventListener('click', function () {
            if ( sidebarWrapper.classList.contains('sidebar--hidden')) {
                sidebarWrapper.classList.remove('sidebar--hidden');
                sidebar.classList.remove('sidebar--hidden');
            };
        });
        
        sidebar.addEventListener('click', function (evt) {
            if (evt.target === sidebar || evt.target === closeButton) {
                sidebarWrapper.classList.add('sidebar--hidden');
                sidebar.classList.add('sidebar--hidden');
            }
        });
    }
};

const modalChat = () => {
    let modal = document.querySelector('.modal');
    let feedbackWrapper = document.querySelector('.modal__feedback');
    let feedbackButton = document.querySelector('.button--chat');
    let sidebarFeedbackBtn = document.querySelector('.sidebar .button--chat');
    let modalCloseBtn = document.querySelector('.modal .button--close');

    feedbackButton.addEventListener('click', function () {
        if (feedbackWrapper.classList.contains('modal--hidden')) {
            feedbackWrapper.classList.remove('modal--hidden');
            modal.classList.remove('modal--hidden');
        };
    });

    sidebarFeedbackBtn.addEventListener('click', function () {
        if (feedbackWrapper.classList.contains('modal--hidden')) {
            feedbackWrapper.classList.remove('modal--hidden');
            modal.classList.remove('modal--hidden');
        };
    });

    modalCloseBtn.addEventListener('click', function () {
        if (!feedbackWrapper.classList.contains('modal--hidden')) {
            feedbackWrapper.classList.add('modal--hidden');
            modal.classList.add('modal--hidden');
        };  
    });

    modal.addEventListener('click', function (evt) {
        if (evt.target === modal || evt.target === modalCloseBtn) {
            feedbackWrapper.classList.add('modal--hidden');
            modal.classList.add('modal--hidden');
        }
    });
};

const modalCall = () => {
    let modal = document.querySelector('.modal');
    let callWrapper = document.querySelector('.modal__call');
    let callButton = document.querySelector('.button--call');
    let sidebarCallBtn = document.querySelector('.sidebar .button--call');
    let modalCloseBtn = document.querySelector('.modal .button--close');

    callButton.addEventListener('click', function () {
        if (callWrapper.classList.contains('modal--hidden')) {
            callWrapper.classList.remove('modal--hidden');
            modal.classList.remove('modal--hidden');
        };
    });

    sidebarCallBtn.addEventListener('click', function () {
        if (callWrapper.classList.contains('modal--hidden')) {
            callWrapper.classList.remove('modal--hidden');
            modal.classList.remove('modal--hidden');
        };
    });

    modalCloseBtn.addEventListener('click', function () {
        if (!callWrapper.classList.contains('modal--hidden')) {
            callWrapper.classList.add('modal--hidden');
            modal.classList.add('modal--hidden');
        };  
    });

    modal.addEventListener('click', function (evt) {
        if (evt.target === modal || evt.target === modalCloseBtn) {
            callWrapper.classList.add('modal--hidden');
            modal.classList.add('modal--hidden');
        }
    });
};

const showMore = () => {
    let mainContentReadMore = document.querySelector('.main-content__description .expand-button');
    let mainContentDescText = document.querySelector('.main-content__description-text');
    let brandsShowMore = document.querySelector('.repairable-brands .expand-button');
    let brandsWrapper = document.querySelector('.repairable-brands__wrapper');
    let devicesShowMore = document.querySelector('.repairable-devices .expand-button');
    let devicesWrapper = document.querySelector('.repairable-devices__wrapper');


    mainContentReadMore.addEventListener('click', function () {
        if (mainContentReadMore.classList.contains('expand-button--not-expanded')) {
            mainContentDescText.classList.add('main-content__description-text--expanded');
            mainContentReadMore.classList.remove('expand-button--not-expanded');
            mainContentReadMore.classList.add('expand-button--expanded');
            mainContentReadMore.textContent = 'Скрыть';
        } else {
            mainContentDescText.classList.remove('main-content__description-text--expanded');
            mainContentReadMore.classList.add('expand-button--not-expanded');
            mainContentReadMore.classList.remove('expand-button--expanded');
            mainContentReadMore.textContent = 'Читать далее';
        }
    });

    brandsShowMore.addEventListener('click', function () {
        if (brandsShowMore.classList.contains('expand-button--not-expanded')) {
            brandsWrapper.classList.add('repairable-brands__wrapper--expanded');
            brandsShowMore.classList.remove('expand-button--not-expanded');
            brandsShowMore.classList.add('expand-button--expanded');
            brandsShowMore.textContent = 'Свернуть';
        } else {
            brandsWrapper.classList.remove('repairable-brands__wrapper--expanded');
            brandsShowMore.classList.remove('expand-button--expanded');
            brandsShowMore.classList.add('expand-button--not-expanded');
            brandsShowMore.textContent = 'Показать все';
            console.log('test');
        }
    });

    devicesShowMore.addEventListener('click', function () {
        if (devicesShowMore.classList.contains('expand-button--not-expanded')) {
            devicesWrapper.classList.add('repairable-devices__wrapper--expanded');
            devicesShowMore.classList.remove('expand-button--not-expanded');
            devicesShowMore.classList.add('expand-button--expanded');
            devicesShowMore.textContent = 'Свернуть';
        } else {
            devicesWrapper.classList.remove('repairable-devices__wrapper--expanded');
            devicesShowMore.classList.remove('expand-button--expanded');
            devicesShowMore.classList.add('expand-button--not-expanded');
            devicesShowMore.textContent = 'Показать все';
            console.log('test');
        }
    });
};

window.onload = function () {
    if (window.innerWidth < 768.98) {
        const swiper = new Swiper('.repairable-devices', {
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
        const swiper2 = new Swiper('.repairable-brands', {
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
        const swiper3 = new Swiper('.repair-prices', {
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

sidebar();
showMore();
modalChat();
modalCall();