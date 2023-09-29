const likeMe = document.querySelector('.like-me')
const times = document.querySelector('.times')
let clickTime = 0
let noOfClicks = 0

likeMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    }
    else {
        if (new Date().getTime() - clickTime < 800) {
            noOfClicks++
            createHeart(e)
        }
        else { clickTime = new Date().getTime() }
    }
})

function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fa-solid', 'fa-heart')
    likeMe.appendChild(heart)

    const top = e.clientY
    const left = e.clientX

    const cardTop = likeMe.offsetTop
    const cardLeft = likeMe.offsetLeft

    heart.style.top = `${top - cardTop}px`
    heart.style.left = `${left - cardLeft}px`
    times.innerText = noOfClicks
    setTimeout(() => {
        heart.remove()
    }, 600)

}