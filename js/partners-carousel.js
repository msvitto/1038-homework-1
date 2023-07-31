const slides = [
    '<img src="img/icon/partner-google.png" alt="partner-google">',
    '<img src="img/icon/partner-amazon.png" alt="partner-amazon">',
    '<img src="img/icon/partner-microsoft.png" alt="partner-microsoft">',
    '<img src="img/icon/partner-uber.png" alt="partner-uber">',
    '<img src="img/icon/partner-dropbox.png" alt="partner-dropbox">',
    '<img src="img/icon/partner-google.png" alt="partner-google">',
    '<img src="img/icon/partner-uber.png" alt="partner-uber">',
    '<img src="img/icon/partner-amazon.png" alt="partner-amazon">',
];
const carouselSlide = document.querySelector('.partners__card-carousel-slide');

let currentSlide =0;

function renderSlide(){
    carouselSlide.innerHTML= slides[currentSlide];
    if (window.innerWidth >= 768){
        const secondSlideIdx = currentSlide +1 >= slides.length ? 0: currentSlide +1;
        carouselSlide.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth >= 1024){
            const thirdSlideIdx= secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx +1;
            carouselSlide.innerHTML += slides[thirdSlideIdx];
        }
    }
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

const btnPrev  = document.querySelector('.partners__carousel-btn-prev');
const btnNext = document.querySelector('.partners__carousel-btn-next');

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

window.addEventListener('resize', renderSlide);