const slides = [
    '<div class="carousel-slide__card card-bg-light"><h3 class="carousel-slide__card-title">FREE</h3><p class="carousel-slide__card-subtitle">Organize across all apps by hand</p><p class="carousel-slide__card-price">0$ Per Month</p><div class="carousel-slide__card-list"><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p></div><button class="carousel-slide__card-btn-dark">Order Now</button></div>',
    '<div class="carousel-slide__card card-bg-dark"><h3 class="carousel-slide__card-title">FREE</h3><p class="carousel-slide__card-subtitle">Organize across all apps by hand</p><p class="carousel-slide__card-price">10$ Per Month</p><div class="carousel-slide__card-list"><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p></div><button class="carousel-slide__card-btn-light">Order Now</button></div>',
    '<div class="carousel-slide__card card-bg-light"><h3 class="carousel-slide__card-title">FREE</h3><p class="carousel-slide__card-subtitle">Organize across all apps by hand</p><p class="carousel-slide__card-price">99$ Per Month</p><div class="carousel-slide__card-list"><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p><p>Pricing Feature</p></div><button class="carousel-slide__card-btn-dark">Order Now</button></div>',
];
const carouselSlide = document.querySelector('.pricing__carousel-slide');

let currentSlide =0;

function renderSlide(){
    carouselSlide.innerHTML= slides[currentSlide];
}
function nextSlide(){
    currentSlide = currentSlide +1 >= slides.length ? 0 : currentSlide +1;
    renderSlide();
}
function prevSlide(){
    currentSlide = currentSlide -1 < 0 ? slides.length-1 :  currentSlide -1;
    renderSlide();
}
renderSlide();
// setInterval(nextSlide,2000);

const btnPrev  = document.querySelector('.pricing__carousel-btn-prev');
const btnNext = document.querySelector('.pricing__carousel-btn-next');

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);