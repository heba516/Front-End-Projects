let boxes = document.querySelectorAll(".most-wanted .row .box");
let btns = document.querySelectorAll(".most-wanted .btn");
let prices = document.querySelectorAll("span.priceP");
let imges = document.querySelectorAll(".most-wanted .row .box .img");
var productCounter = 0;

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        productCounter++;

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('price', prices[index].textContent);
        urlParams.set('src', imges[index].src);
        
        const newUrl = 'product.html?' + urlParams.toString();
        window.location.href = newUrl;
    })
});


//Sizes box
let sizes = document.querySelectorAll(".size span");
let selectedSize = ''
sizes.forEach((span) => {
    span.addEventListener("click", (e)=>{
        sizes.forEach((size) => {
            size.classList.remove("active");
        });
        e.target.classList.add("active");
        selectedSize = e.target.textContent;
    })
});

//Quantity box
let quantityCounter = document.querySelector(".quantity-counter");
let quantityPlus = document.querySelector(".fa-plus");
let quantityMinus = document.querySelector(".fa-minus");
let counter = 1;

quantityPlus.onclick = function() {
    quantityMinus.style.color = "black";
    quantityMinus.style.cursor = "pointer";
    counter++;
    quantityCounter.textContent = counter;
}
quantityMinus.onclick = function() {
    if (counter > 1) {
        counter--;
        quantityCounter.textContent = counter;
    }
    else {
        quantityMinus.style.color = "#9d969d";
        quantityMinus.style.cursor = "not-allowed";
    }
}


///////////////////////////////////////////////////
let price = parseFloat(urlParams.get('price'));
let btn = document.querySelector(".product-card .two");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const size = selectedSize;
    let total = price * counter;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('src', urlParams.get('src'));
    urlParams.set('size', size);
    urlParams.set('qun', counter);
    urlParams.set('total', total);

    const newUrl2 = 'buy_product.html?' + urlParams.toString();
    window.location.href = newUrl2;
});


///////////////////////////////////////////////////
//cart
if (productCounter === 0) {
    document.querySelector(".empty").style.display = "block";
} else {
    document.querySelector(".empty").style.display = "none";
};