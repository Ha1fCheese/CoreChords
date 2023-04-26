function changeKey(direction) {
    var pre = document.getElementsByTagName('pre')[0]; // выбираем первый элемент <pre> на странице
    var spans = pre.getElementsByTagName('span'); // выбираем все элементы <span> внутри <pre>
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        var chord = span.innerText; // получаем текущий аккорд
        var newChord = changePitch(chord, direction); // изменяем аккорд на полутона вверх или вниз
        span.innerText = newChord; // применяем изменение
    }
}

function changePitch(chord, direction) {
    var note = chord.charAt(0); // получаем ноту
    var accidental = chord.slice(1); // получаем знак альтерации (если есть)
    var sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; // ноты с диезами
    var flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']; // ноты с бемолями
    var index;
    if (accidental === '#') { // если нота с диезом
        index = sharpNotes.indexOf(note); // получаем индекс ноты в массиве с диезами
        if (index === sharpNotes.length - 1 && direction === 'up') { // если это G# и мы повышаем тональность, то возвращаем A
            return 'A';
        }
        if (index === 0 && direction === 'down') { // если это A# и мы понижаем тональность, то возвращаем G#
            return 'G#';
        }
        index = (index + (direction === 'up' ? 1 : -1)) % sharpNotes.length; // получаем индекс следующей ноты с диезом
        return sharpNotes[index] + accidental; // возвращаем аккорд с новой нотой и тем же знаком альтерации
    } else if (accidental === 'b') { // если нота с бемолем
        index = flatNotes.indexOf(note); // получаем индекс ноты в массиве с бемолями
        if (index === flatNotes.length - 1 && direction === 'up') { // если это Ab и мы повышаем тональность, то возвращаем A
            return 'A';
        }
        if (index === 0 && direction === 'down') { // если это A и мы понижаем тональность, то возвращаем Ab
            return 'Ab';
        }
        index = (index + (direction === 'up' ? 1 : -1)) % flatNotes.length; // получаем индекс следующей н
    }
}
// Привязываем функции к кнопкам
document.querySelector(".transpose-up").addEventListener("click", changeKey('up'));
document.querySelector(".transpose-down").addEventListener("click", changeKey('down'));
