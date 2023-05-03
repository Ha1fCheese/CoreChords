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

let logo = document.getElementsByClassName('logo_div')[0];
logo.style = logo.style + ";cursor: pointer;";
logo.addEventListener('click',() =>{
   window.location = 'index.html';
});

//да, тут контроль версии
const versionControl = document.getElementsByTagName('footer')[0];
let div = document.createElement('div');
div.className = 'footer__div'
let v = document.createElement('p');
v.innerHTML = 'Content release 1.1 (+font)';
div.appendChild(v);
versionControl.appendChild(div);