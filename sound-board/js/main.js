const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    document.querySelector('.buttons').appendChild(btn)

    btn.addEventListener('click', () => {
        stop()
        document.getElementById(sound).play()
    })
});

function stop() {
    sounds.forEach((sound) => document.getElementById(sound).pause())
}