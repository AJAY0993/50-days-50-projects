const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector('input')
const clear = document.querySelector('.clear')
const sizePlus = document.querySelector('.increase')
const sizeMinus = document.querySelector('.decrease')
const span = document.querySelector('span')


let color = input.value
let size = 10
let isPressed = false
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

sizePlus.addEventListener('click', () => {
    if (size === 50) { size += 0 }
    else { size += 5 }
    span.innerText = size
})
sizeMinus.addEventListener('click', () => {
    if (size === 5) { size -= 0 }
    else {
        size -= 5
    }
    span.innerText = size
})

clear.addEventListener('click', () => location.reload())
