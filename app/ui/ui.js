const navbarList = document.querySelector('.nav-section-list');
const menuIcon = document.querySelector('.hamburger-icon');

menuIcon.addEventListener('click', () => navbarList.classList.toggle('change'));
