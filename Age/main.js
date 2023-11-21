let day = document.querySelector('.day-box');
let month = document.querySelector('.month-box');
let year = document.querySelector('.year-box');

let dayError = document.querySelector('.day .error');
let monError = document.querySelector('.month .error');
let yearError = document.querySelector('.year .error');


let dayDate = document.getElementById('day1');
let monthDate = document.getElementById('month1');
let yearDate = document.getElementById('year1');

let arrow = document.querySelector('.arrow');


day.addEventListener('change', updateBirthDate);
month.addEventListener('change', updateBirthDate);
year.addEventListener('change', updateBirthDate);
function updateBirthDate() {
    let birth = `${day.value}${month.value}${year.value}`;

    if (day.value && month.value && year.value) {
        let birthDate = new Date(year.value, month.value - 1, day.value);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        let d = today.getDate() - birthDate.getDate();

        if (d < 0) {
            m--; // Adjust months if days are negative
            d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        
        if (m < 0) {
            age--; // Adjust years if months are negative
            m += 12;
        }

        if (day.value > 31 || day.value < 1) {
            day.style.border = "1px solid red";
            dayError.style.opacity = "1";
            dayDate.innerHTML = "- -";
        } else {
            day.style.border = "1px solid #ccc";
            dayDate.innerHTML = d;  // Display day difference
            dayError.style.opacity = "0";
        }
        
        if (month.value > 12 || month.value < 1) {
            month.style.border = "1px solid red";
            monError.style.opacity = "1";
            monthDate.innerHTML = "- -";
        } else {
            month.style.border = "1px solid #ccc";
            monthDate.innerHTML = m;  // Display month difference
            monError.style.opacity = "0";
        }
        
        if (year.value > 2023 || year.value < 1900) {
            year.style.border = "1px solid red";
            yearError.style.opacity = "1";
            yearDate.innerHTML = "- -";
        } else {
            year.style.border = "1px solid #ccc";
            yearDate.innerHTML = age;  // Display age
            yearError.style.opacity = "0";
        }       
        
    }
};


arrow.addEventListener('click', function() {
    day.value = "";
    month.value = "";
    year.value = "";
    dayDate.innerHTML = "- -";
    monthDate.innerHTML = "- -";
    yearDate.innerHTML = "- -";
    day.style.border = "1px solid #ccc";
    month.style.border = "1px solid #ccc";
    year.style.border = "1px solid #ccc";
    dayError.style.opacity = "0";
    monError.style.opacity = "0";
    yearError.style.opacity = "0";
    updateBirthDate();
});
