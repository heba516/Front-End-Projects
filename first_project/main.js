let mode = document.querySelector('body');
let img = document.querySelector('.icon_mode img');

img.addEventListener("click", ()=> {
    if (mode.classList.contains('dark')) {
        img.src = '/images/twemoji--sun.png';
        mode.classList.remove('dark');
        mode.classList.add('light');
    }else {
        img.src = '/images/icon-park--moon.png';
        mode.classList.remove('light');
        mode.classList.add('dark');
    }
})