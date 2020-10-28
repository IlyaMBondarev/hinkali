
document.querySelector('.wrapper').classList.add('loaded');

window.onscroll = function() {
    myScroll()
}

function _scroll(menu, b, c){
    const d = document.getElementById(menu);
    let e = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    if(b == 'slideDown'){
        if(e){
            d.style.top = '0'
        }
        else{
            d.style.top = c
        }
    }
    else if(b == 'slideUp'){
        if(e){
            d.style.bottom = '0'
        }
        else{
            d.style.bottom = c
        }
    }
    else if(b == 'slideLeft'){
        if(e){
            d.style.left = '0'
        }
        else{
            d.style.left = c
        }
    }
    else{
        if(e){
            d.style.right = '0'
        }
        else{
            d.style.right = c
        }
    }
}

function myScroll() {
    _scroll('topNav', 'slideDown', '-350px')
}


document.querySelectorAll('.slider').forEach(slider => {
    let slides = slider.querySelector('.slider__slides');
    let buttons = slider.querySelectorAll('.slider__button');
    let indexOfActiveButton;
    for (let indexOfButton = 1; indexOfButton <= buttons.length; indexOfButton++) {
        if (buttons[indexOfButton - 1].classList.contains('slider__button-active')) {
            indexOfActiveButton = indexOfButton;
            slides.style.transition = 'margin-left 2s ease-in-out';
            break;
        }
    }
    for (let indexOfButton = 1; indexOfButton <= buttons.length; indexOfButton++) {
        buttons[indexOfButton - 1].addEventListener('click', () => {
            if (indexOfButton !== indexOfActiveButton) {
                buttons[indexOfActiveButton - 1].classList.remove('slider__button-active');
                buttons[indexOfButton - 1].classList.add('slider__button-active');
                indexOfActiveButton = indexOfButton;
                slides.style.marginLeft = `-${indexOfActiveButton * 100}%`;
            }
        })
    }

    setInterval(() => {
            buttons[indexOfActiveButton - 1].classList.remove('slider__button-active');
            if (indexOfActiveButton < buttons.length) {
                indexOfActiveButton++;
                buttons[indexOfActiveButton - 1].classList.add('slider__button-active');
                slides.style.marginLeft = `-${indexOfActiveButton * 100}%`;
            } else {
                slides.style.transition = 'margin-left 0s ease-in-out';
                slides.style.marginLeft = `0%`;
                indexOfActiveButton = 1;
                buttons[indexOfActiveButton - 1].classList.add('slider__button-active');
                setTimeout(() => {
                    slides.style.transition = 'margin-left 2s ease-in-out';
                    slides.style.marginLeft = `-${indexOfActiveButton * 100}%`;
                }, 0.001)
            }
    }, 10000)
})