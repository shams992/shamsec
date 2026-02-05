let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000);

// let slides = document.querySelectorAll('.slide');
// let current = 0;

// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove('active'));
//     slides[index].classList.add('active');
// }

// document.querySelector('.next').addEventListener('click', () => {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     current = (current - 1 + slides.length) % slides.length;
//     showSlide(current);
// });

// // Auto slide
// setInterval(() => {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// }, 3000);
