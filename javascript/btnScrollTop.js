//скролл наверх
const  btnScrollToTop = document.querySelector('#btnScrollToTop');
window.addEventListener('scroll', function (){
    if(window.pageYOffset >100){
        btnScrollToTop.classList.add('show');
    }
    else{
        btnScrollToTop.classList.remove('show');
    }
});
btnScrollToTop.addEventListener('click', function (){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

//да, тут контроль версии
const versionControl = document.getElementsByTagName('footer')[0];
let div = document.createElement('div');
div.className = 'footer__div'
let v = document.createElement('p');
v.innerHTML = 'XML test "alpha version 3.1"';
div.appendChild(v);
versionControl.appendChild(div);