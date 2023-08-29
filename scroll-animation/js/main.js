const height = window.innerHeight
const boxes = document.querySelectorAll('.box')
const limit = height / 5 * 4

window.addEventListener('scroll', checkForTop);
checkForTop()

function checkForTop() {
    Array.from(boxes).forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < limit) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    });
}