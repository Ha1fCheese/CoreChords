function changeKey(direction) {
    var pre = document.getElementsByTagName('pre')[0];
    var spans = pre.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        var chord = span.innerText;
        var newChord = changePitch(chord, direction);
        span.innerText = newChord;
    }
}

function changePitch(chord, direction) {
    var note = chord.charAt(0);
    var accidental = chord.slice(1);
    var sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    var flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    var index;
    if (accidental === '#') {
        index = sharpNotes.indexOf(note);
        if (index === sharpNotes.length - 1 && direction === 'up') {
            return 'A';
        }
        if (index === 0 && direction === 'down') {
            return 'G#';
        }
        index = (index + (direction === 'up' ? 1 : -1)) % sharpNotes.length;
        return sharpNotes[index] + accidental;
    } else if (accidental === 'b') {
        index = flatNotes.indexOf(note);
        if (index === flatNotes.length - 1 && direction === 'up') {
            return 'A';
        }
        if (index === 0 && direction === 'down') {
            return 'Ab';
        }
        index = (index + (direction === 'up' ? 1 : -1)) % flatNotes.length;
    }
}

document.querySelector(".transpose-up").addEventListener("click", changeKey('up'));
document.querySelector(".transpose-down").addEventListener("click", changeKey('down'));
