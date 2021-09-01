const navToggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});