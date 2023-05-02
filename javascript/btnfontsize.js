function increaseFontSize() {
    let preTag = document.getElementsByTagName("pre")[0];
    let currentFontSize = parseFloat(window.getComputedStyle(preTag).fontSize);
    console.log(currentFontSize);
    preTag.style.fontSize = (currentFontSize +1) + "px";
}
function decreaseFontSize() {
    let preTag = document.getElementsByTagName("pre")[0];
    let currentFontSize = parseFloat(window.getComputedStyle(preTag).fontSize);
    preTag.style.fontSize = (currentFontSize -1) + "px";
}