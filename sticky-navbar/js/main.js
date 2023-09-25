const nav = document.querySelector('.nav')

window.addEventListener('scroll', updateNav)

function updateNav() {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
}