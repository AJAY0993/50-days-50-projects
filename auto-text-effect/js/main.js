const h = document.querySelector('h1')
const input = document.querySelector('input')
const text = 'We Love Programming'
let speed = 300 / input.value
let idx = 1

effect()
function effect() {
    h.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(effect, speed)
}

input.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})