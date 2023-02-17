const slides = document.querySelectorAll(".slide")
const carousel = document.getElementsByClassName(".carousel")

let current_slide = 0


function hideSlide() {
    slides.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slides[current_slide].classList.add('on')
}

function nextSlide() {
    hideSlide()
    if (current_slide == slides.length - 1) {
        current_slide = 0
    } else {
        current_slide++
    }
    showSlide()
}

function backSlide() {
    hideSlide()
    if (current_slide == 0) {
        current_slide = slides.length - 1
    } else {
        current_slide--
    }
    showSlide()
}

$('.arrowBack').click(function () {
    backSlide()
})

$('.arrowNext').click(function () {
    nextSlide()
})
