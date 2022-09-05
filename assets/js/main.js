/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
});

/*=============== SCROLL REVEAL HOME ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__container`)
sr.reveal(`.home__img, .logos__container`, {delay: 500})
sr.reveal(`.help__img, .about__img, iframe`, {origin: 'left'})
sr.reveal(`.help__data, .about__data, .map__data`, {origin: 'right'})
sr.reveal(`.projects__card, .about__card, .swiper, .bio__container, .team__card, .projects`, {interval: 100})


/*=============== MIXITUP FILTER PROJECTS ===============*/
let mixerProjects = mixitup('.projects__content', {
    selectors: {
        target: '.projects__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter projects */
mixerProjects.filter('.web-design')

/* Link active products */
const linkProjects = document.querySelectorAll('.project__filter-item')

function activeProjects(){
    linkProjects.forEach(l=> l.classList.remove('active-projects'))
    this.classList.add('active-projects')
}

linkProjects.forEach(l=> l.addEventListener('click', activeProjects))




