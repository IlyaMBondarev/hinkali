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

