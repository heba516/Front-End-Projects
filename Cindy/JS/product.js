

//Sizes box
let sizes = document.querySelectorAll(".size span");
sizes.forEach((span) => {
    span.addEventListener("click", (e)=>{
        sizes.forEach((size) => {
            size.classList.remove("active");
        });
        e.target.classList.add("active");
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

