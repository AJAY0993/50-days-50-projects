let text = document.querySelector('.loading-text')
let load = 0
let bg = document.querySelector('.bg')

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    text.innerText = load + '%'
    text.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(num, inMin, inMax, outMin, OutMax) {
    return (num - inMin) * (OutMax - outMin) / (inMax - inMin) + outMin
}