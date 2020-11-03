let timeSoon = document.getElementById('timeSoon');
let timeChoose = document.getElementById('timeChoose');
let blockToHide = document.getElementById('blockToHide');

timeSoon.addEventListener('click', () => {
    blockToHide.style.display = 'none';
});

timeChoose.addEventListener('click', () => {
    blockToHide.style.display = '';
});