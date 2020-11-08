
document.querySelector('.wrapper').classList.add('loaded');

myScroll();

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
    _scroll('topNav', 'slideDown', '-100%');

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
//cities
let cityName,
    cityContacts,
    phone,
    delivery,
    timeToDelievery,
    mail,
    card;


if (document.querySelector('.contacts')) {
    cityName = document.querySelector('.city-select__city-selected').dataset.city;
    cityContacts = document.querySelector('.city');
    phone = document.querySelector('.city-phone');
    delivery = document.querySelector('.city-delivery-in');
    timeToDelievery = document.querySelector('.city-time-to-work');
    mail = document.querySelector('.city-mail');
    card = document.querySelector('.city-card');

    cityContacts.textContent = document.querySelector('.city-select__city-selected').textContent;
    phone.textContent = contacts[cityName].phone;
    delivery.textContent = contacts[cityName].delivery;
    timeToDelievery.textContent = contacts[cityName].time;
    mail.textContent = contacts[cityName].mail;
    card.textContent = contacts[cityName].card;
}

let citySelects = document.querySelectorAll('.city-select');

let mobileCitySelect = document.querySelector('.burger-menu');

let citySelectArray = [];
let citySelectMobile = {};
let burgerInput = document.querySelector('#burger');
let burgerCitiesInput = document.querySelector('#mobileCities');

citySelectMobile.current = mobileCitySelect.querySelector('.city-select__current');
citySelectMobile.citySelected = mobileCitySelect.querySelector('.city-select__city-selected');
citySelectMobile.cities = mobileCitySelect.querySelectorAll('.city-select__city');
citySelectMobile.cities.forEach(city => {
    city.addEventListener('click', () => {
        citySelectMobile.current.textContent = city.textContent;
        citySelectMobile.citySelected.classList.remove('city-select__city-selected');
        citySelectMobile.citySelected = city;
        citySelectMobile.citySelected.classList.add('city-select__city-selected');
        if (document.querySelector('.contacts')) {
            cityName = citySelectMobile.citySelected.dataset.city;
            cityContacts.textContent = citySelectMobile.citySelected.textContent;
            phone.textContent = contacts[cityName].phone;
            delivery.textContent = contacts[cityName].delivery;
            timeToDelievery.textContent = contacts[cityName].time;
            mail.textContent = contacts[cityName].mail;
            card.textContent = contacts[cityName].card;
        }
        for (let i = 0; i < citySelectArray.length; i++) {
            citySelectArray[i].current.textContent = city.textContent;
            citySelectArray[i].dropBlock.classList.remove('city-select__dropped');
            citySelectArray[i].arrow.classList.remove('city-select__arrow-up');
            citySelectArray[i].citySelected.classList.remove('city-select__city-selected');
            for (let j = 0; citySelectArray[i].cities.length; j++) {
                if (city.textContent === citySelectArray[i].cities[j].textContent) {
                    citySelectArray[i].citySelected = citySelectArray[i].cities[j];
                    break;
                }
            }
            citySelectArray[i].citySelected.classList.add('city-select__city-selected');
        }
        burgerInput.checked = false;
        burgerCitiesInput.checked = false;
    });
});

function chooseCity(indexOfSelect, city) {
    citySelectArray[indexOfSelect].current.textContent = city.textContent;
    citySelectArray[indexOfSelect].dropBlock.classList.remove('city-select__dropped');
    citySelectArray[indexOfSelect].arrow.classList.remove('city-select__arrow-up');
    citySelectArray[indexOfSelect].citySelected = city;
    citySelectArray[indexOfSelect].citySelected.classList.add('city-select__city-selected');
    if (document.querySelector('.contacts')) {
        cityName = citySelectArray[indexOfSelect].citySelected.dataset.city;
        cityContacts.textContent = citySelectArray[indexOfSelect].citySelected.textContent;
        phone.textContent = contacts[cityName].phone;
        delivery.textContent = contacts[cityName].delivery;
        timeToDelievery.textContent = contacts[cityName].time;
        mail.textContent = contacts[cityName].mail;
        card.textContent = contacts[cityName].card;
    }
    for (let j = 0; j < citySelectArray.length; j++) {
        if (j !== indexOfSelect) {
            citySelectArray[j].current.textContent = city.textContent;
            citySelectArray[j].dropBlock.classList.remove('city-select__dropped');
            citySelectArray[j].arrow.classList.remove('city-select__arrow-up');
            citySelectArray[j].citySelected.classList.remove('city-select__city-selected');
            for (let k = 0; citySelectArray[j].cities.length; k++) {
                if (city.textContent === citySelectArray[j].cities[k].textContent) {
                    citySelectArray[j].citySelected = citySelectArray[j].cities[k];
                    break;
                }
            }
            citySelectArray[j].citySelected.classList.add('city-select__city-selected');
        }
    }
    citySelectMobile.current.textContent = city.textContent;
    citySelectMobile.citySelected.classList.remove('city-select__city-selected');
    for (let i = 0; citySelectMobile.cities.length; i++) {
        if (city.textContent === citySelectMobile.cities[i].textContent) {
            citySelectMobile.citySelected = citySelectMobile.cities[i];
            break;
        }
    }
    citySelectMobile.citySelected.classList.add('city-select__city-selected');
}

for (let i = 0; i < citySelects.length; i++) {
    let select = {};
    select.dropBtn = citySelects[i].querySelector('.city-select__drop-btn');
    select.current = citySelects[i].querySelector('.city-select__current');
    select.arrow = citySelects[i].querySelector('.city-select__arrow');
    select.dropBlock = citySelects[i].querySelector('.city-select__drop');
    select.closeBtn = citySelects[i].querySelector('.city-select__close');
    select.citySelected = citySelects[i].querySelector('.city-select__city-selected');
    select.cities = citySelects[i].querySelectorAll('.city-select__city');
    citySelectArray.push(select);
    select.dropBtn.addEventListener('click', () => {
        select.dropBlock.classList.toggle('city-select__dropped');
        select.arrow.classList.toggle('city-select__arrow-up');
    });
    select.closeBtn.addEventListener('click', () => {
        select.dropBlock.classList.remove('city-select__dropped');
        select.arrow.classList.remove('city-select__arrow-up');
    });
    select.cities.forEach(city => {
        city.addEventListener('click', () => {
            chooseCity(i, city);
        });
    });
}

citySelectArray.forEach(select => {
    select.cities.forEach(city => {
        city.addEventListener('mouseover', () => {
            select.citySelected.classList.remove('city-select__city-selected');
        });
        city.addEventListener('mouseout', () => {
            select.citySelected.classList.add('city-select__city-selected');
        });
    })
});


//call back

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

popupCallbackCloseBtn.addEventListener('click', () => {
    popupCallbackBackground.classList.remove('popup-callback-bg-visible');
});


// validation

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
            if (input.value.length < 18) {
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

//phone mask

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
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


//cart

let carts = document.querySelectorAll('.cart-block');

carts.forEach(cart => {
    let button = cart.querySelector('.cart-btn');
    let cartBlock = cart.querySelector('.cart');
    button.addEventListener('click', () => cartBlock.classList.toggle('cart-opened'));
})



const isMobile = window.navigator.userAgent.match(/Mobile/) && window.navigator.userAgent.match(/Mobile/)[0] === "Mobile";
const event = isMobile ? "touchstart" : "mouseover";

const button = document.querySelectorAll('*[data-animation="ripple"]'),
    container = document.querySelector(".container");

for (let i = 0; i < button.length; i++) {
    const currentBtn = button[i];

    currentBtn.addEventListener(event, function(e) {


        if (!isMobile) {
            e.preventDefault();
        }
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

let nav = document.querySelector('#nav');
let topNav = document.querySelector('#topNav');
let header = document.querySelector('header');
let body = document.querySelector('body');

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', (event) => {
        let xBegin = event.pageX;
        let yBegin = event.pageY;
        let cartBlock, cartBtn;
        if (isMobile) {
            cartBlock = header.querySelector('.cart-block');
            cartBtn = cartBlock.querySelector('.cart-btn');
        } else if (topNav.style.top === '0' || topNav.style.top === '0px' || topNav.style.top === '') {
            cartBlock = topNav.querySelector('.cart-block');
            cartBtn = cartBlock.querySelector('.cart-btn');
        } else {
            cartBlock = nav.querySelector('.cart-block');
            cartBtn = cartBlock.querySelector('.cart-btn');
        }
        let cartBlockCoordinates = cartBlock.getBoundingClientRect();
        let xTo = cartBlockCoordinates.left + pageXOffset + (cartBtn.offsetWidth / 2);
        let yTo = cartBlockCoordinates.top + pageYOffset + (cartBtn.offsetHeight / 2);

        let baseCss = `position: absolute;
                                    width: 40px;
                                    height: 40px;
                                    background: url(img/icons/icon_HIT.png);
                                    background-size: cover;
                                    z-index: 999;
                                    transform: scale(0) translate(-50%,-50%);
                                    left: ${xBegin}px;
                                    top: ${yBegin}px;
                                    opacity: 1;`;

        let lateCss = `position: absolute;
                                    width: 40px;
                                    height: 40px;
                                    background: url(img/icons/icon_HIT.png);
                                    background-size: cover;
                                    z-index: 999;
                                    transition: transform 0.3s linear 0s, top 0.7s linear 0.3s, left  0.7s linear 0.3s, opacity 0.3s linear 1s;
                                    transform: scale(1) translate(-50%,-50%);
                                    left: ${xTo}px;
                                    top: ${yTo}px;
                                    opacity: 0;`

        let iconToCart = document.createElement('span');
        iconToCart.style.cssText = baseCss;

        body.appendChild(iconToCart);

        setTimeout( function() {
            iconToCart.style.cssText = lateCss;
        }, 5);

        setTimeout ( function() {
            iconToCart.remove();
        }, 1300);

    })
})
document.querySelectorAll('.wave').forEach(wave => {
    let span = wave.textContent;
    let inner = '';
    for (let indexOfLetter = 0; indexOfLetter < span.length; indexOfLetter++) {
        inner += `<span style="transition: font-size 0s linear ${indexOfLetter * 0.04}s">` + span[indexOfLetter] + '</span>';
    }
    wave.innerHTML = inner;
})
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