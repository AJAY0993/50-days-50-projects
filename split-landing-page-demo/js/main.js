const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    console.log('mouse enters left')
    container.classList.add('split-left')
})
right.addEventListener('mouseenter', () => {
    console.log('mouse enters right')
    container.classList.add('split-right')
})
left.addEventListener('mouseleave', () => {
    console.log('mouse leaves left')
    container.classList.toggle('split-left')
})
right.addEventListener('mouseleave', () => {
    console.log('mouse leaves right')
    container.classList.toggle('split-right')
})