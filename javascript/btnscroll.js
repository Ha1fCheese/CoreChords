const speedUpButton = document.getElementById('speed-up');
const slowDownButton = document.getElementById('slow-down');
const stop = document.getElementById('stop');
const speedUpButton2 = document.getElementById('speed-up2');
const slowDownButton2 = document.getElementById('slow-down2');
const stop2 = document.getElementById('stop2');

let scrollSpeed = 0;
let scrollDisplay = 0;

speedUpButton.addEventListener('click', () => {
    scrollSpeed += 0.4;
    scrollDisplay += 1;
});
speedUpButton2.addEventListener('click', () => {
    scrollSpeed += 0.4;
    scrollDisplay += 1;
});

slowDownButton.addEventListener('click', () => {
    scrollSpeed -= 0.4;
    scrollDisplay -= 1;

    if (scrollSpeed <= 0) {
        scrollSpeed = 0;
        scrollDisplay = 0;
    }
});
slowDownButton2.addEventListener('click', () => {
    scrollSpeed -= 0.4;
    scrollDisplay -= 1;

    if (scrollSpeed <= 0) {
        scrollSpeed = 0;
        scrollDisplay = 0;
    }
});

stop.addEventListener('click', () =>{
    if (scrollSpeed !== 0){
        scrollSpeed = 0;
        scrollDisplay = 0;
    }
})
stop2.addEventListener('click', () =>{
    if (scrollSpeed !== 0){
        scrollSpeed = 0;
        scrollDisplay = 0;
    }
})
function scrollPage() {
    window.scrollBy(0, scrollSpeed);
    if (scrollSpeed !== 0){
        stop.innerHTML = 'Остановить +' + scrollDisplay;
        stop.style.textDecoration = 'underline';
        stop2.innerHTML = 'Остановить +' + scrollDisplay;
        stop2.style.textDecoration = 'underline';
    }
    else {
        stop.innerHTML = 'Прокрутка';
        stop.style.textDecoration = 'none';
        stop2.innerHTML = 'Прокрутка';
        stop2.style.textDecoration = 'none';
    }
    setTimeout(scrollPage, 10);
}

scrollPage();