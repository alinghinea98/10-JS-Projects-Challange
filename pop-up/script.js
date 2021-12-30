const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');


function openPopup() {
    container.classList.add('active');
}

function closePopup() {
    container.classList.remove('active');
}

open.addEventListener('click', () => {
    openPopup();
})

close.addEventListener('click', () => {
    closePopup();
})
