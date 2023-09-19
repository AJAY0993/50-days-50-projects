const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')
const time = document.querySelector('.time')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

toggle.addEventListener('click', (e) => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerText = 'Dark mode'
    }
    else {
        html.classList.add('dark')
        e.target.innerText = 'Light mode'
    }
})
function updateClock() {
    const currentTime = new Date()
    const hour = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const day = currentTime.getDay()
    const month = currentTime.getMonth()
    const date = currentTime.getDate()
    const ampm = hour >= 12 ? 'PM' : 'AM'

    function rotateHand() {
        hourHand.style.transform = `translate(-50%, -100%) rotate(${hour > 12 ? (hour - 12) * 30 : hour * 30}deg)`;
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
        secondHand.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
        console.log(hour)
        console.log(minutes)
        console.log(seconds)
        console.log(hourHand)
        console.log(minuteHand)
        console.log(secondHand)
    }

    time.innerHTML = `<h2 class="">${hour > 12 ? (hour - 12) : hour} : ${minutes} ${ampm}</h2>
    <div>

        <h3 class="day">${days[day]}</h3>
        <h3 class="month">${months[month]}</h3>
        <h3 class="date">${date}</h3>

    </div>
</div>`

    rotateHand()


}


setInterval(updateClock, 1000)
