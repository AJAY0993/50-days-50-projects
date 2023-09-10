const togller = document.querySelectorAll('.btn')

Array.from(togller).forEach(btn => { btn.addEventListener('click', () => btn.parentElement.classList.toggle('active')) })