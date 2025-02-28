let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");

    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", showSlides);