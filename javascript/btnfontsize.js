function increaseFontSize() {
    let preTag = document.getElementsByTagName("pre")[0];
    let currentFontSize = parseInt(window.getComputedStyle(preTag).fontSize);
    preTag.style.fontSize = (currentFontSize + 1) + "px";

}
function decreaseFontSize() {
    let preTag = document.getElementsByTagName("pre")[0];
    let currentFontSize = parseInt(window.getComputedStyle(preTag).fontSize);
    preTag.style.fontSize = (currentFontSize - 1) + "px";
}