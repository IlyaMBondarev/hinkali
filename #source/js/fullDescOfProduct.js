let descriptionBtn = document.querySelector('.dish__description-full');
let description = document.querySelector('.dish__table');

descriptionBtn.addEventListener('click', () => {
    if (description.classList.contains('dish__table-opened')) {
        description.classList.remove('dish__table-opened');
        descriptionBtn.textContent = 'Полное описание';
    } else {
        description.classList.add('dish__table-opened');
        descriptionBtn.textContent = 'Скрыть';
    }
})