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

//да, тут контроль версии
const versionControl = document.getElementsByTagName('footer')[0];
let div = document.createElement('div');
div.className = 'footer__div'
let v = document.createElement('p');
v.innerHTML = 'XML test "alpha version 3.5"';
div.appendChild(v);
versionControl.appendChild(div);