const nav = document.getElementsByTagName("nav")[0];
const checkbox = document.getElementById("menu__toggle");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        nav.style = "margin-bottom: 136px;" +
            "transition: 0.3s ease-in-out";
    } else {
        nav.style = "margin-bottom:0;" +
            "transition: 0.3s ease-in-out";
    }
});