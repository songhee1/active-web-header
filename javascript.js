const toggle=document.querySelector('.toggle_btn');
const menu=document.querySelector('.navbar__menu');
const icons=document.querySelector('.navbar__icons');
toggle.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
