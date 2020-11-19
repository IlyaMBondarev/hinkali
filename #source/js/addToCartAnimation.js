
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
                                    color: #ffffff;
                                    user-select: none;
                                    white-space: nowrap;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 18px;
                                    background-color: #f44601;
                                    border-radius: 50%;
                                    z-index: 999;
                                    transform: scale(0) translate(-50%,-50%);
                                    left: ${xBegin}px;
                                    top: ${yBegin}px;
                                    opacity: 1;`;

        let lateCss = `position: absolute;
                                    width: 40px;
                                    height: 40px;
                                    color: #ffffff;
                                    user-select: none;
                                    white-space: nowrap;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 18px;
                                    background-color: #f44601;
                                    border-radius: 50%;
                                    z-index: 999;
                                    transition: transform 0.3s linear 0s, top 0.7s linear 0.3s, left  0.7s linear 0.3s, opacity 0.3s linear 1s;
                                    transform: scale(1) translate(-50%,-50%);
                                    left: ${xTo}px;
                                    top: ${yTo}px;
                                    opacity: 0;`

        let iconToCart = document.createElement('span');
        iconToCart.style.cssText = baseCss;
        iconToCart.textContent = '+1';

        body.appendChild(iconToCart);

        setTimeout( function() {
            iconToCart.style.cssText = lateCss;
        }, 5);

        setTimeout ( function() {
            iconToCart.remove();
        }, 1300);

    })
})