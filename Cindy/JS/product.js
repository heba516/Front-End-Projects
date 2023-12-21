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
let image = document.querySelector(".product-card .image img");
let price = parseFloat(document.querySelector(".product-card .ImgForm .pr").textContent);
let btn = document.querySelector(".product-card .two");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const size = selectedSize;
    let total = price * counter;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('src', image.src);
    urlParams.set('size', size);
    urlParams.set('qun', counter);
    urlParams.set('total', total);

    const newUrl2 = 'buy_product.html?' + urlParams.toString();
    window.location.href = newUrl2;
});