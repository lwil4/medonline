const menuBtn = document.getElementById('menuBtn');
const buttonContainer = document.getElementById('buttonContainer');

menuBtn.addEventListener('click', () => {
    buttonContainer.classList.toggle('open');
});