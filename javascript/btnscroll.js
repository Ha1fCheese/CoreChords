const speedUpButton = document.getElementById('speed-up');
const slowDownButton = document.getElementById('slow-down');
const stop = document.getElementById('stop');
const speedUpButton2 = document.getElementById('speed-up2');
const slowDownButton2 = document.getElementById('slow-down2');
const stop2 = document.getElementById('stop2');

let scrollSpeed = 550;
let scrollDisplay = 0;

speedUpButton.addEventListener('click', () => {
    scrollSpeed -= 100;
    scrollDisplay += 1;
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
});
speedUpButton2.addEventListener('click', () => {
    scrollSpeed -= 100;
    scrollDisplay += 1;
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
});

slowDownButton.addEventListener('click', () => {
    scrollSpeed += 100;
    scrollDisplay -= 1;

    if (scrollDisplay<= 0) {
        scrollSpeed = 550;
        scrollDisplay = 0;
    }
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
});
slowDownButton2.addEventListener('click', () => {
    scrollSpeed += 100;
    scrollDisplay -= 1;

    if (scrollDisplay <= 0) {
        scrollSpeed = 550;
        scrollDisplay = 0;
    }
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
});

stop.addEventListener('click', () =>{
    if (scrollDisplay !== 0){
        scrollSpeed = 550;
        scrollDisplay = 0;
    }
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
})
stop2.addEventListener('click', () =>{
    if (scrollDisplay !== 0){
        scrollSpeed = 550;
        scrollDisplay = 0;
    }
    if (scrollDisplay > 6){
        scrollDisplay = 6;
        scrollSpeed = 0;
    }
    if (scrollDisplay !== 0){
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
})
let velocity = 0;
function scrollPage() {
    if (scrollSpeed !== 550) {
        velocity = 1;
    }
    else{
        velocity = 0;
    }
    window.scrollBy(0, velocity);
    setTimeout(scrollPage, scrollSpeed);
}

scrollPage();