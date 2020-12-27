'use strict';

// 스크롤한 길이에 따라 navbar를 투명 => 진하게 로 바꿈.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar 버튼을 누르면 해당 section으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;

  // == 과 === 차이 인식
  if (link === undefined) {
    return;
  }

  scrollIntoView(link);
});

// Home 부분에 있는 'Contact Me'를 눌렀을 때 해당 위치로 이동.
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// 스크롤 내리면 홈 부분만 transparent 적용.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = Math.max(1 - window.scrollY / homeHeight, 0);
});

// 직접 정의한 유틸리티 함수는 가장 밑으로!!
// 반복되는 코드(scrollTo)
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
