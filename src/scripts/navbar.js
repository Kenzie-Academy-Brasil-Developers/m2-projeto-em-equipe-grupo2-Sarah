export function openNavbar(){
    const mobileMenu = document.querySelector('.mobile__menu')
    const navbar = document.querySelector('.nav__list')
    
  
    mobileMenu.addEventListener('click', ()=>{
         mobileMenu.classList.toggle('active')
         navbar.classList.toggle('show__menu')
 
    })
 }


 export function activeStyleNavbar(){
     const anchorCovid = document.querySelector('.anchor__covid-19')
     const anchorVaccine = document.querySelector('.anchor__vaccine')
     const anchorNews = document.querySelector('.anchor__news')

     // anchorCovid.id.add('style__active--anchor')
     anchorCovid.id = 'style__active--anchor'
     // anchorCovid.remove.id('style__active--anchor')
     // if(window.location == 'index.html'){
     // }
 }