export function openNavbar(){
    const mobileMenu = document.querySelector('.mobile__menu')
    const navbar = document.querySelector('.nav__list')
    
  
    mobileMenu.addEventListener('click', ()=>{
         mobileMenu.classList.toggle('active')
         navbar.classList.toggle('show__menu')
 
    })
 }
