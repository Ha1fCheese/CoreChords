// получаем кнопки по их идентификаторам
const speedUpButton = document.getElementById('speed-up');
const slowDownButton = document.getElementById('slow-down');
const stop = document.getElementById('stop');
const speedUpButton2 = document.getElementById('speed-up2');
const slowDownButton2 = document.getElementById('slow-down2');
const stop2 = document.getElementById('stop2');
// устанавливаем начальную скорость прокрутки
let scrollSpeed = 0;

// обработчик клика по кнопке "Ускорить"
speedUpButton.addEventListener('click', () => {
    // увеличиваем скорость прокрутки
    scrollSpeed += 0.4;
});
speedUpButton2.addEventListener('click', () => {
    // увеличиваем скорость прокрутки
    scrollSpeed += 0.4;
});

// обработчик клика по кнопке "Замедлить"
slowDownButton.addEventListener('click', () => {
    // уменьшаем скорость прокрутки
    scrollSpeed -= 0.4;

    // если скорость меньше или равна 0, останавливаем прокрутку
    if (scrollSpeed <= 0) {
        scrollSpeed = 0;
    }
});
slowDownButton2.addEventListener('click', () => {
    // уменьшаем скорость прокрутки
    scrollSpeed -= 0.4;

    // если скорость меньше или равна 0, останавливаем прокрутку
    if (scrollSpeed <= 0) {
        scrollSpeed = 0;
    }
});

stop.addEventListener('click', () =>{
    if (scrollSpeed !== 0){
        scrollSpeed = 0;
    }
})
stop2.addEventListener('click', () =>{
    if (scrollSpeed !== 0){
        scrollSpeed = 0;
    }
})
// функция для прокрутки страницы с заданной скоростью
function scrollPage() {
    // прокручиваем страницу на заданное расстояние
    window.scrollBy(0, scrollSpeed);
    if (scrollSpeed !== 0){
        stop.innerHTML = 'Остановить';
        stop.style.textDecoration = 'underline';
        stop2.innerHTML = 'Остановить';
        stop2.style.textDecoration = 'underline';
    }
    else {
        stop.innerHTML = 'Прокрутка';
        stop.style.textDecoration = 'none';
        stop2.innerHTML = 'Прокрутка';
        stop2.style.textDecoration = 'none';
    }
    // повторяем функцию через короткий интервал времени (например, 10 миллисекунд)
    setTimeout(scrollPage, 10);
}

// запускаем функцию прокрутки страницы
scrollPage();