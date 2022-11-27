function slider () {
    const prev = document.querySelector('.offer__slider-prev '),
    next = document.querySelector('.offer__slider-next'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    wrapper = document.querySelector('.offer__slider-wrapper'),
    inner = document.querySelector('.offer__slider-inner');
const slides = document.querySelectorAll('.offer__slide');

let indexSlide = 1;
let offset = 0;
let width = window.getComputedStyle(wrapper).width;
 console.log(width.match(/\d/g).join(''));
const ofterSlide = document.querySelector('.offer__slider');
    ofterSlide.style.position = 'relative';
const navig = document.createElement('div');
    ofterSlide.append(navig);
    navig.classList.add('carousel-indicators');


for(let i = 0; i < slides.length;i++) {
 let round = document.createElement('div');
 round.classList.add('dot');
 navig.append(round);
}
const dot = document.querySelectorAll('.dot');
    dot[0].style.opacity = 1;
navig.addEventListener('click', (e) => {
 const target = e.target;
 dot.forEach((item, i) => {
    item.style.opacity = 0.5;

    if(target && target == item) {
       offset = width.replace(/\D/g, '') * i;

       dot[i].style.opacity = 1;

       inner.style.transform = `translateX(-${offset}px)`;
       indexSlide = i + 1; 
    }
    if(slides.length < 10) {
       current.textContent = `0${indexSlide}`;
    }
    else{
       current.textContent = indexSlide;
    }
 });
});


if(slides.length < 10) {
 total.textContent = `0${slides.length}`;
 current.textContent = `0${indexSlide}`;
}
else{
 total.textContent = slides.length;
 current.textContent = indexSlide;
}

inner.style.width = 100 * slides.length + '%';
slides.forEach(slide => slide.style.width = width);
inner.style.display = 'flex';
wrapper.style.overflow = 'hidden';
inner.style.transition = '0.5s all';



next.addEventListener('click', () => {
 if(offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
    offset = 0;
 }
 else {offset += +width.replace(/\D/g, '');}

 inner.style.transform = `translateX(-${offset}px)`;

 if(indexSlide == slides.length) {
    indexSlide = 1;
 }
 else {
    indexSlide++;
 }

 if(slides.length < 10) {
    current.textContent = `0${indexSlide}`;
 }
 else{
    current.textContent = indexSlide;
 }

 dot.forEach(dot => dot.style.opacity = '0.5');
 dot[indexSlide - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
 if(offset == 0) {
    offset = +width.replace(/\D/g, '') * (slides.length - 1);
 }
 else {offset -= +width.replace(/\D/g, '');}

 inner.style.transform = `translateX(-${offset}px)`;

 if(indexSlide == 1) {
    indexSlide = slides.length;
 }
 else {
    indexSlide--;
 }

 if(slides.length < 10) {
    current.textContent = `0${indexSlide}`;
 }
 else{
    current.textContent = indexSlide;
 }

 dot.forEach(dot => dot.style.opacity = '0.5');
 dot[indexSlide - 1].style.opacity = 1;
});

}

export default slider;