// show manu
const navManu = document.getElementById("nav-menu"),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navManu.classList.add('show-menu');
    })
}

// hide the menu
if(navClose){
    navClose.addEventListener('click', ()=>[
        navManu.classList.remove('show-menu')
    ])
}


// ========= Remove menu for Mobile user
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu");
    navManu.classList.remove('show-menu');

}
navLink.forEach( n => n.addEventListener('click', linkAction));



// Add shadow Header
const shadowHeader = () =>{
    const header = document.getElementById('header');
    // add class if the btn offset is greater than 50of
    this.scrollY >= 50? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader)


// scroll up condition:
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;
    sections.forEach( current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionsClass = document.querySelector(`.nav__menu a[href*=` + sectionId + `]`)

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }
        else{
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);