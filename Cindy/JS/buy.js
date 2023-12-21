let boxes = document.querySelectorAll(".most-wanted .row .box");
let btns = document.querySelectorAll(".most-wanted .btn");
let prices = document.querySelectorAll("span.priceP");
let imges = document.querySelectorAll(".most-wanted .row .box .img");

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
    })
});

