const choicesDiv = document.querySelector('.choices')
const textArea = document.querySelector('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createChoices(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => { }, 10)
        randomSelect()

    }

})

function createChoices(input) {
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim())
    console.log(choices)

    choicesDiv.innerHTML = ''

    choices.forEach(choice => {
        const choiceEl = document.createElement('span')
        choiceEl.innerText = choice
        choiceEl.classList.add('choice')
        choicesDiv.appendChild(choiceEl)
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomChoice = pickRandomChoice();

        highlight(randomChoice);

        setTimeout(() => { unhighlight(randomChoice) }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomChoice = pickRandomChoice();
            highlight(randomChoice);
        }, 100);
    }, times * 100)
}

function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice')
    return choices[Math.floor(Math.random() * choices.length)]
}

function highlight(choice) {
    choice.classList.add('highlight')
}
function unhighlight(choice) {
    choice.classList.remove('highlight')
}