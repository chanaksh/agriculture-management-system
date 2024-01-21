let element = document.querySelector('#full-img');

function hidefull(){
   element.classList.add('hide');
   element.classList.remove('show');
}

function change(pic){
    element.classList.add('show');
    element.classList.remove('hide');
    fullimage.src=pic;
}