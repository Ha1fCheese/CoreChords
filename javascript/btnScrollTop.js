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

