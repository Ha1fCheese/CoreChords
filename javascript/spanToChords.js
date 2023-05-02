//Преобразование аккордов
const pre = document.querySelectorAll('pre');
const toSearch = ['Am','A#m','A#','A7','A','B7','Bb','Bm','B','C7','C#m','C#','Cm','C','D#m','D7','D#','Dm','D','E7','Em','Em7','E','Fm','F#m','F#','F','G#m','G#','Gm','G']
const regex = new RegExp(toSearch.join("|"),"g");
pre.forEach((pre) => {
    pre.innerHTML = pre.innerHTML.replace(regex, '<span>$&</span>');
});