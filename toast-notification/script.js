const btn = document.getElementById('button');
const container = document.getElementById('container');

function showNotification() {
       const notifi = document.createElement('div');
       notifi.classList.add('toast');
       notifi.innerText = 'Toast message';
       container.appendChild(notifi);

       setTimeout(() => {
           notifi.remove();
       }, 2000);
}
btn.addEventListener('click', () => {
    showNotification();
})
