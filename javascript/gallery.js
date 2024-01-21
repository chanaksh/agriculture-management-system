let element = document.querySelector('#full-img');
let element1=document.querySelector('.back-arrow');
function hidefull(){
   element.classList.add('hide');
   element.classList.remove('show');
}

function change(pic){

    
    element.classList.add('show');
    element.classList.remove('hide');
    fullimage.src=pic;
}


element1.addEventListener('click',()=>{
 window.open('../html/landing page.html');
});