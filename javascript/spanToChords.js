//Преобразование аккордов
const pre = document.querySelectorAll('pre');
const toSearch = ['Am','G','B7','Em','C','D']
const regex = new RegExp(toSearch.join("|"),"g");
pre.forEach((pre) => {
    pre.innerHTML = pre.innerHTML.replace(regex, '<span>$&</span>');
});