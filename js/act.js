 window.addEventListener('DOMContentLoaded', event => {


     // Activate Bootstrap scrollspy on the main nav element
     const sideNav = document.body.querySelector('#sideNav');
     if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
             target: '#sideNav',
             rootMargin: '0px 0px -40%',
         });
     };


     // Collapse responsive navbar when toggler is visible
         const navbarToggler = document.body.querySelector('.navbar-toggler');
         const responsiveNavItems = [].slice.call(
         document.querySelectorAll('#navbarResponsive .nav-link')
         );
     responsiveNavItems.map(function (responsiveNavItem) {
         responsiveNavItem.addEventListener('click', () => {
             if (window.getComputedStyle(navbarToggler).display !== 'none') {
                 navbarToggler.click();
             }
         });
     });


 });

function about(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('interests').style.display = 'none';
    
}

function experience(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('experience').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('interests').style.display = 'none';
    
}
function education(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('education').style.display = 'block';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('interests').style.display = 'none';
}
function skills(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('interests').style.display = 'none';
}
function interests(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('interests').style.display = 'block';
}

