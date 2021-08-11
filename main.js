const menuIcon = document.querySelector('#menuIcon');
const closeBtn = document.querySelector('#closeIcon');
const menuContainer = document.querySelector('.menu-container');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  closeBtn.style.display = 'block';
  menuContainer.style.height = '500px';
  navList.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menuContainer.style.height = '0px';
  navList.style.display = 'none';
});

navList.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menuContainer.style.height = '0px';
  navList.style.display = 'none';
});
