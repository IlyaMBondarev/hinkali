document.querySelectorAll('.select').forEach(block => {
    let button = block.querySelector('.select-btn');
    let current = button.querySelector('.select-current');
    let arrow = button.querySelector('.fa-caret-down');
    let drop = block.querySelector('.select-drop');
    let lists = drop.querySelectorAll('li');
    button.addEventListener('click', () => {
        drop.classList.toggle('select-drop-opened');
        arrow.classList.toggle('arrow-rotated');
    });
    lists.forEach(li => {
        li.addEventListener('click', () => {
            current.textContent = li.textContent;
            drop.classList.remove('select-drop-opened');
            arrow.classList.remove('arrow-rotated');
        });
    })
})

document.querySelectorAll('.select-input').forEach(block => {
    let button = block.querySelector('.select-btn');
    let current = block.querySelector('.select-current');
    let drop = block.querySelector('.select-input-drop');
    let lists = drop.querySelectorAll('li');
    button.addEventListener('focus', () => {
        drop.classList.add('select-drop-opened');
    });
    button.addEventListener('blur', () => {
        drop.classList.remove('select-drop-opened');
    });
    lists.forEach(li => {
        li.addEventListener('click', () => {
            current.value = li.textContent;
            drop.classList.remove('select-drop-opened');
        });
    })
})