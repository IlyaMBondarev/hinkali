document.querySelector('.wrapper').classList.add('loaded');




document.querySelectorAll('.slider').forEach(slider => {
    let slides = slider.querySelector('.slider__slides');
    let buttons = slider.querySelectorAll('.slider__button');
    let indexOfActiveButton;
    for (let indexOfButton = 0; indexOfButton < buttons.length; indexOfButton++) {
        if (buttons[indexOfButton].classList.contains('slider__button-active')) {
            indexOfActiveButton = indexOfButton;
            break;
        }
    }
    for (let indexOfButton = 0; indexOfButton < buttons.length; indexOfButton++) {
        buttons[indexOfButton].addEventListener('click', () => {
            if (indexOfButton !== indexOfActiveButton) {
                buttons[indexOfActiveButton].classList.remove('slider__button-active');
                buttons[indexOfButton].classList.add('slider__button-active');
                indexOfActiveButton = indexOfButton;
                slides.style.marginLeft = `-${indexOfActiveButton * 100}%`;
            }
        })
    }
    /*
    setInterval(() => {
            buttons[indexOfActiveButton].classList.remove('slider__button-active');
            if (indexOfActiveButton < buttons.length - 1) {
                indexOfActiveButton++;
            } else {
                indexOfActiveButton = 0;
            }
            buttons[indexOfActiveButton].classList.add('slider__button-active');
            slides.style.marginLeft = `-${indexOfActiveButton * 100}%`;
    }, 15000)
    */
})
//# sourceMappingURL=main.js.map