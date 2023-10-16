const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

const toggles = document.querySelectorAll('.toggle')

toggles.forEach(toggle => toggle.addEventListener('change', () => {
    magic(toggle)
}))

function magic(lastChecked) {
    if (good.checked && cheap.checked && fast.checked) {
        if (lastChecked == good) {
            cheap.checked = false
        }
        if (lastChecked == cheap) {
            fast.checked = false
        }
        if (lastChecked == fast) {
            good.checked = false
        }
    }
}