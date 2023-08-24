let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')
let preogress = document.getElementById('progress')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    console.log(currentActive)
    update()
})


prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1

    }
    console.log(currentActive)
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) { circle.classList.add('active') }
        else { circle.classList.remove('active') }
    })

    const actives = document.querySelectorAll('.active')



    preogress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive == 4) {
        next.disabled = true
    }

    else if (currentActive == 1) {
        prev.disabled = true
    }

    else {
        next.disabled = false
        prev.disabled = false
    }


}
