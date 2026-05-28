'use strict'
const menuBtn = document.querySelector('.menu__icon');
const mobMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const wrapper = document.querySelector('.wrapper');

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('menu__icon--active');
    mobMenu.classList.toggle('menu--active');
    overlay.classList.toggle('overlay--active');
    if (wrapper.classList.contains('wrapper--active')) {
        wrapper.classList.remove('wrapper--active')
    } else {
        wrapper.classList.add('wrapper--active')
    };

    browserWidth();
});

const links = document.querySelectorAll(".menu__link");

const currentPath = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
        link.classList.add("link-visit");
    } else { link.classList.remove("link-visit"); }
});

const swiper = new Swiper(".blog__slider", {

    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,

    loop: true,
    autoheight: true,

    grabCursor: true,

    effect: "coverflow",

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".blog__btn-right",
        prevEl: ".blog__btn-left",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        }

    }

});

const cafeSlider = new Swiper(".slider-popular", {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    loop: true,
    autoheight: true,

    grabCursor: true,

    effect: "coverflow",

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".slider-popular__next",
        prevEl: ".slider-popular__prew",
    },

});

