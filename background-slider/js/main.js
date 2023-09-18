
const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')
const buttonLeft = document.querySelector('.arrow-left')
const buttonRight = document.querySelector('.arrow-right')

let slideNo = 0

buttonLeft.addEventListener('click', () => {
    slideNo--
    if (slideNo < 0) { slideNo = slides.length - 1 }
    console.log('click')
    bodyBg()
    updateSlide()
})

buttonRight.addEventListener('click', () => {
    slideNo++
    if (slideNo > slides.length - 1) { slideNo = 0 }
    bodyBg()
    updateSlide()
})

function bodyBg() {
    body.style.backgroundImage = slides[slideNo].style.backgroundImage
}
function updateSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[slideNo].classList.add('active')
}

updateSlide()
bodyBg()