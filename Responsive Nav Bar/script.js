const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav ul');
menu.addEventListener('click',()=>{
  menuList.classList.toggle('show-menu');
});