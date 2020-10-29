
document.querySelector('.wrapper').classList.add('loaded');

window.onscroll = function() {
    myScroll()
    closeCarts();
}

function closeCarts() {
    carts.forEach(cart => {
        cart.querySelector('.cart').classList.remove('cart-opened');
    })
}

function _scroll(block, b, c){
    const d = document.getElementById(block);
    let e = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    if(b == 'slideDown'){
        if(e){
            d.style.top = '0';
        }
        else{
            d.style.top = c;

        }
    }
    else if(b == 'slideUp'){
        if(e){
            d.style.bottom = '0';
        }
        else{
            d.style.bottom = c;
        }
    }
    else if(b == 'slideLeft'){
        if(e){
            d.style.left = '0';
        }
        else{
            d.style.left = c;
        }
    }
    else{
        if(e){
            d.style.right = '0';
        }
        else{
            d.style.right = c;
        }
    }
}

function myScroll() {
    _scroll('topNav', 'slideDown', '-350px');

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
let citySelects = document.querySelectorAll('.city-select');

citySelects.forEach(block => {
    let dropBtn = block.querySelector('.city-select__drop-btn');
    let current = dropBtn.querySelector('.city-select__current');
    let arrow = dropBtn.querySelector('.city-select__arrow');
    let dropBlock = block.querySelector('.city-select__drop');
    let closeBtn = dropBlock.querySelector('.city-select__close');
    let citySelected = dropBlock.querySelector('.city-select__city-selected');
    let cities = dropBlock.querySelectorAll('.city-select__city')
    dropBtn.addEventListener('click', () => {
        dropBlock.classList.toggle('city-select__dropped');
        arrow.classList.toggle('city-select__arrow-up');
    });
    closeBtn.addEventListener('click', () => {
        dropBlock.classList.remove('city-select__dropped');
        arrow.classList.remove('city-select__arrow-up');
    });
    cities.forEach(city => {
        city.addEventListener('click', () => {
            current.textContent = city.textContent;
            dropBlock.classList.remove('city-select__dropped');
            arrow.classList.remove('city-select__arrow-up');
            citySelected = city;
            citySelected.classList.add('city-select__city-selected');
        });
        city.addEventListener('mouseover', () => {
            citySelected.classList.remove('city-select__city-selected');
        });
        city.addEventListener('mouseout', () => {
            citySelected.classList.add('city-select__city-selected');
        });
    })
})

let popupCallbackBackground = document.querySelector('.popup-callback-bg');
let popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
let popupCallback = popupCallbackBackground.querySelector('.popup-callback');
let popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');

popupCallbackOpenBtns.forEach(button => {
    button.addEventListener('click', () => {
        popupCallbackBackground.classList.add('popup-callback-bg-visible');
    });
})

popupCallbackBackground.addEventListener('click', (event) => {
    if (event.target === popupCallbackBackground) {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    }
});

popupCallbackCloseBtn.addEventListener('click', (event) => {
    popupCallbackBackground.classList.remove('popup-callback-bg-visible');
});



// валидация

const popupCallbackForm = document.getElementById('popupCallbackForm');
popupCallbackForm.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let error = formValidate(popupCallbackForm);

    if (error === 0) {

    }
}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        input.classList.remove('_error');

        if (input.classList.contains('_phone')) {
            if(input.value.length < 18) {
                input.classList.add('_error');
                error++;
            }
        } else {
            if (input.value.length < 3 || input.value.length > 32) {
                input.classList.add('_error');
                error++;
            }
        }
    }
    return error;
}

//маска телефона

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
    }
}

let phones = document.querySelectorAll("._phone");
phones.forEach(phone => phone.addEventListener("input", mask, false));
phones.forEach(phone => phone.addEventListener("focus", mask, false));
phones.forEach(phone => phone.addEventListener("blur", mask, false));


//корзина

let carts = document.querySelectorAll('.cart-block');

carts.forEach(cart => {
    let button = cart.querySelector('.cart-btn');
    let cartBlock = cart.querySelector('.cart');
    button.addEventListener('click', () => cartBlock.classList.toggle('cart-opened'));
})
/*

document.querySelectorAll('.product__add').forEach(button => {
    button.addEventListener('mouseover', (event) => {
        button.innerHTML += "<span class='ripple-effect'>";
        let effect = button.querySelectorAll('span:last-child')[0];
        effect.style.left = `${event.pageX - button.pageX}px`;
        effect.style.top = `${event.pageY - button.pageY}px`;
        effect.style.transform = 'scale(100)';
        effect.style.opacity = '0';
    })
})

*/


const isMobile = window.navigator.userAgent.match(/Mobile/) && window.navigator.userAgent.match(/Mobile/)[0] === "Mobile";
const event = isMobile ? "touchstart" : "mouseover";

const button = document.querySelectorAll('*[data-animation="ripple"]'),
    container = document.querySelector(".container");

for (let i = 0; i < button.length; i++) {
    const currentBtn = button[i];

    currentBtn.addEventListener(event, function(e) {

        e.preventDefault();
        const button = e.target,
            rect = button.getBoundingClientRect(),
            originalBtn = this,
            btnHeight = rect.height,
            btnWidth = rect.width;
        let posMouseX = 0,
            posMouseY = 0;

        if (isMobile) {
            posMouseX = e.changedTouches[0].pageX - rect.left;
            posMouseY = e.changedTouches[0].pageY - rect.top;
        } else {
            posMouseX = e.x - rect.left;
            posMouseY = e.y - rect.top;
        }

        const baseCSS =  `position: absolute;
                                            width: ${btnWidth * 2}px;
                                            height: ${btnWidth * 2}px;
                                            transition: all linear 700ms;
                                            transition-timing-function:cubic-bezier(0.250, 0.460, 0.450, 0.940);
                                            border-radius: 50%;
                                            background: var(--color-ripple);
                                            top:${posMouseY - btnWidth}px;
                                            left:${posMouseX - btnWidth}px;
                                            pointer-events: none;
                                            transform:scale(0)`

        var rippleEffect = document.createElement("span");
        rippleEffect.style.cssText = baseCSS;

        //prepare the dom
        currentBtn.style.overflow = "hidden";
        this.appendChild(rippleEffect);

        //start animation
        setTimeout( function() {
            rippleEffect.style.cssText = baseCSS + `transform:scale(1); opacity: 0;`;
        }, 5);

        setTimeout( function() {
            rippleEffect.remove();
            //window.location.href = currentBtn.href;
        },700);
    })
}