let shop = document.querySelector('.shop');
let shopMenu = document.querySelector('.shop-menu');
let icon = document.querySelector('.shop i');
let background1 = document.querySelector('.img-new-arrivals .img1');
let background2 = document.querySelector('.img-new-arrivals .img2');
let animations = document.querySelectorAll('.ani');


//on click shop in nav bar
shop.onclick = function () {
    shopMenu.classList.toggle('open');

    if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else if (icon.classList.contains('fa-angle-up')) {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}

document.addEventListener ("click", e => {
    if (e.target !== shop && e.target !== shopMenu) {
        
        //if menu is open
        if (shopMenu.classList.contains("open")){

            shopMenu.classList.toggle("open");
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    }
});

shopMenu.onclick = function (e){
    e.stopPropagation();
}


//change new arrivals image
background2.style.transform = 'translateX(100%)';

function img1() {
    background1.style.transform = 'translateX(-100%)';
    background2.style.transform = 'translateX(0%)';
}
function img2() {
    background2.style.transform = 'translateX(100%)';
    background1.style.transform = 'translateX(0%)';
}
setInterval(() => {
    img1();
    setTimeout(img2, 4000); // Start img2 after 3 seconds
}, 8000);



//animation
window.onscroll = function() {
    animations.forEach ((animation) => {
        let OffsetTop = animation.offsetTop;
        let OuterHeight = animation.offsetHeight;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        if (windowScrollTop > (OffsetTop - windowHeight)) {
            animation.classList.add('animation');
        }
    })
}



//////////////////////////////////////
let boxes = document.querySelectorAll(".most-wanted .row .box");
let btns = document.querySelectorAll(".most-wanted .btn");
let prices = document.querySelectorAll(".priceP");
let imges = document.querySelectorAll(".most-wanted .row .box .img")

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedBox = boxes[index];
        const selectedPrice = prices[index].innerHTML;
        const selectedImg = imges[index].src;

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('price', selectedPrice);
        urlParams.set('src', selectedImg);
        
        const newUrl = 'product.html?' + urlParams.toString();
        window.location.href = newUrl;
    });
});
