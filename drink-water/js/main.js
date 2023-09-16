const bigCup = document.querySelector('.cup-big')
const smallCups = document.querySelectorAll('.cup-small')
const percentage = document.querySelector('.percentage')
const litres = document.querySelector('.litres')

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        fillCup(index)
        updateBigCup()
    })
});

function fillCup(index) {
    smallCups.forEach((cup2, index2) => {
        cup2.classList.remove('filled')
        if (index2 <= index) {
            cup2.classList.add('filled')
        }
    })
}

function updateBigCup() {
    const filledCups = document.querySelectorAll('.filled').length
    const totalCups = document.querySelectorAll('.cup-small').length
    const height = filledCups / totalCups * 100
    percentage.style.height = `${height}%`
    percentage.innerText = `${height}%`
    if (filledCups === 8) {
        document.querySelector('.container>div>div').style.display = 'none'
    } else {
        document.querySelector('.container>div>div').style.display = 'block'
    }
    litres.innerText = `${2 - filledCups * 250 / 1000}L`
}