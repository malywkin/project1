
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const buttons = document.querySelectorAll('.button');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//arrow

const arrow = document.querySelector('.header-arrow');
const fristSection = document.querySelector('.transform');

function arrowClick(){
    fristSection.scrollIntoView({behavior:'smooth'})
};

arrow.addEventListener('click',arrowClick);


// nav fade

const nav = document.querySelector('nav');

nav.addEventListener('mouseover', function (e){
    if (e.target.classList.contains('nav_link')){
        const clicked = e.target;
        const siblings = clicked.closest('.nav').querySelectorAll('.nav_link');
        const logo = document.querySelector('.logo');

        siblings.forEach(el => {
            if (el !== clicked) el.style.opacity = 0.5;
        });
        logo.style.opacity = 0.5;
    }
})

nav.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('nav_link')){
        const clicked = e.target;
        const siblings = clicked.closest('.nav').querySelectorAll('.nav_link');
        const logo = document.querySelector('.logo');

        siblings.forEach(el => {
            if (el !== clicked) el.style.opacity = 1;
        });
        logo.style.opacity = 0.5;
    }
    
})

// / прилипшая навигация

const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add ('sticky');
    else nav.classList.remove ('sticky');
};

const headerObserver = new IntersectionObserver
(stickyNav, {
    root:null,
    threshold:0,
    rootMargin: `1px`,
});

headerObserver.observe(header);


///плавно открывающиеся секции

const allSections = document.querySelector('.section')

const revealSection = function (entries, observer) {
    const [entry] = entries;
    entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver (revealSection, {
    root:null,
    threshold:0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(seciton);
    section.classList.add('section--hidden');
})

