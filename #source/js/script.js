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


let scrollLists = document.querySelectorAll('._scroll');

scrollLists.forEach(list => {
    let ul = list.querySelector('ul');
    let arrow = list.querySelector('.scroll-down');
    let scrolling;
    arrow.addEventListener('mousedown', () => {
        scrolling = setInterval(function scrollDown() {
            ul.scrollBy(0, 2);
        }, 20)
    });
    arrow.addEventListener('mouseup', () => {
        clearInterval(scrolling);
    })
})