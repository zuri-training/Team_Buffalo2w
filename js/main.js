const menuBtn = document.querySelector('.hamburger')
const menuBar = document.querySelector('.menu-bar')
const mobileNav = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', showMenu);
mobileNav.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
}