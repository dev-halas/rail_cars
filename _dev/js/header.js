const header = document.querySelector('.header') 
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    header.classList.toggle('--active')
})



const pageHeight = window.innerHeight * 0.1;

window.onscroll = () => {
    let top = window.scrollY;
    top >= pageHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
};