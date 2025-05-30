// 'use strict'

/* Toggle Style Switcher */

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
})

window.addEventListener('scroll', () => {
  if(document.querySelector('.style-switcher').classList.contains('open'))
  { document.querySelector('.style-switcher').classList.remove('open'); }
})


/* Dark/Light Mode */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
})

window.addEventListener('load', () => {
  if(document.body.classList.contains('dark')) { 
    dayNight.querySelector('i').classList.add('fa-sun');
  } else { 
    dayNight.querySelector('i').classList.add('fa-moon');
  }
})

/* Typing Animation */
let typed = new Typed('.typing', { 
  strings: ["", "I'm a Beginner Frontend Developer","Html, Css, JavaScript", " I understand basic UI/UX design...", "I'm a Motion Designer"],
  typeSpeed: 80,
  BackSpeed: 60,
  loop: true
});

/* Changing Aside Active Link */
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function(){
    removeBackSection();
    for(let j = 0; j < totalNavList; j++) { 
        if(navList[j].querySelector('a').classList.contains('active')) { addBackSection(j);/*allSection[j].classList.add('back-section');*/ }
        navList[j].querySelector('a').classList.remove('active');
      }
    this.classList.add('active');
    showSection(this);

    if(window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}


function addBackSection(num) { 
  allSection[num].classList.add('back-section'); 
}

function removeBackSection(){
  for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('back-section'); }
}

function showSection(element){
  for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('active'); }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector('#' + target).classList.add('active');
}

function updateNav(element){
  for(let i = 0; i < totalNavList; i++){
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) { navList[i].querySelector('a').classList.add('active'); }
  }
}

document.querySelector('.hire-me').addEventListener('click', function(){
  const sectionIndex = this.getAttribute('data-section-index');
  /*console.log(sectionIndex);*/
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

/* Activating Mobile Menu */

const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => { asideSectionTogglerBtn(); })

function asideSectionTogglerBtn(){
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for(let i = 0; i < totalSection; i++) { allSection[i].classList.toggle('open');

  }
}


function downloadFiles() {
  // File1 — CV
  event.preventDefault();

  const link1 = document.createElement('a');
  link1.href = 'CV_Intern_MaksymDramaretskyi.pdf';
  link1.download = 'CV_Intern_MaksymDramaretskyi.pdf';
  document.body.appendChild(link1);
  link1.click();
  document.body.removeChild(link1);

  // File 2 — CV
  const link2 = document.createElement('a');
  link2.href = 'Søknad_MaksymDramaretskyi.pdf';
  link2.download = 'Søknad_MaksymDramaretskyi.pdf';
  document.body.appendChild(link2);
  link2.click();
  document.body.removeChild(link2);
}
