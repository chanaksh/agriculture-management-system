function display(){
    var element=document.querySelector('#dis');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    }

    function not_display(){
    var element=document.querySelector('#dis');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
    }


    let element1=document.querySelector('.back-arrow');

    element1.addEventListener('click',()=>{
        window.open('../html/landing page.html');
       });