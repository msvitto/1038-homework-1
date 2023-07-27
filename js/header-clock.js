const clock = document.querySelector('.header-nav__social-clock');
function updateClick(){
clock.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClick,1000);
updateClick();