const navToggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

const btnScroll = document.querySelector('.scroll-top');

btnScroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
})