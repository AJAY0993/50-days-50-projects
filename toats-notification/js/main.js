const button = document.querySelector('button')
const toats = document.querySelector('.toasts')
const messages = ['oops some error occured', 'your form is submitted', 'this is some info', 'pls try again in 10 mins']
const classes = ['error', 'success', 'info', 'cool-down']
const length = classes.length

button.addEventListener('click', getNotif)

function getNotif() {
    let randomIndex = Math.floor(Math.random() * length)
    const notif = document.createElement('div')
    notif.innerText = messages[randomIndex]
    notif.classList.add(classes[randomIndex], 'toast')
    toats.appendChild(notif)

    setTimeout(() => { notif.remove() }, 1000)
}