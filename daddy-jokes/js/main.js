getJoke()
document.querySelector('button').addEventListener('click', getJoke)
document.querySelector('button').addEventListener('click', buttonSound)
function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.joke
        })
}

function buttonSound() {
    document.getElementById('click').play()
}