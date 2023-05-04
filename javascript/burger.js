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

//ссылка на лого
let logo = document.getElementsByClassName('logo_div')[0];
logo.style = logo.style + ";cursor: pointer;";
logo.addEventListener('click',() =>{
   window.location = 'index.html';
});

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'shortcut-icon';
link.href = 'content/svg/favicon.svg';
link.type = 'image/svg';
head.appendChild(link);
let link2 = document.createElement('link');
link2.rel = 'icon';
link2.href = 'content/svg/favicon.svg';
link2.type = 'image/svg';
head.appendChild(link2);

//да, тут контроль версии
const versionControl = document.getElementsByTagName('footer')[0];
let div = document.createElement('div');
div.className = 'footer__div'
let v = document.createElement('p');
v.innerHTML = 'Content release 1.3.5 (704)';
div.appendChild(v);
versionControl.appendChild(div);