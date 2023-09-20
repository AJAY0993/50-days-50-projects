const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const X = e.clientX
        const Y = e.clientY
        console.log(X, Y)

        const buttonLeft = e.target.offsetTop
        const buttonTop = e.target.offsetTop

        const innerX = X - buttonLeft
        const innerY = Y - buttonTop

        const span = document.createElement('span')
        span.classList.add('circle')
        span.style.top = innerY + 'px'
        span.style.left = innerX + 'px'
        this.appendChild(span)

        setTimeout(() => span.remove, 500)
    })
}
)