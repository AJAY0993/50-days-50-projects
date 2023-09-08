const insert = document.querySelector('.key')
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class="box">
    <span>Keycode</span>
    ${e.keyCode}
</div>
<div class="box">
${e.key == ' ' ? 'space' : e.key}
    <span>Keyname</span>
</div>
<div class="box">
${e.code}
    <span>code</span>
</div>`
    console.log(e)
})
