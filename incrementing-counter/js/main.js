let count = document.querySelectorAll('.count')


count.forEach(x => {
    x.innerText = '0'

    function update() {
        const target = +x.getAttribute('data-target')
        const c = Number(x.innerText)
        const increment = target / 200

        if (c < target) {
            x.innerText = `${Math.ceil(c + increment)}`
            console.log(Math.ceil(c + increment))
            setTimeout(update, 10)
        }

        else { x.innerText = target }

    }

    update()
}
)

