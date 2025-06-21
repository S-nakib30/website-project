document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile_menu_item');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active'); // You can style `.active` in CSS
  });
});

WebTransportBidirectionalStream.addEventListener('scroll', function(){
const navbar = document.querySelector('.navbar');
if(window.screenY>0){
    navbar.classList.add('navbar-scroll');
}else{
    navbar.classList.remove('navbar-scroll')
}
})