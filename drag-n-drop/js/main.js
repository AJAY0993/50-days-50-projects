const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('drop', dragDrop)
})

function dragStart(e) {
    setTimeout(() => this.className += ' invisible')
}

function dragEnd(e) {
    this.className += 'fill'
}

function dragEnter() {
    e.preventDefault()
    e.target.classList.add('hovered')
}

function dragLeave(e) {
    e.target.classList.remove('hovered')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}