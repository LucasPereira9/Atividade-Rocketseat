const modalback = document.querySelector('.modal-back')
const cards = document.querySelectorAll('.card')
for (let card of cards) {
    card.addEventListener('click', function() {
        modalback.classList.add('ativo')
    })
}
document.querySelector('.close-modal').addEventListener("click" , function() { modalback.classList.remove('ativo')
})