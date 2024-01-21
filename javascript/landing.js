let element = document.querySelector('#search-me');
function display() {
    var element = document.querySelector('#dis');
    let element1=document.querySelector('.accout-of-data');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    element1.classList.add('blur-me-black-shadow');
    var element = document.querySelector('#acc-data');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function not_display() {
    var element = document.querySelector('#dis');
    let element1=document.querySelector('.accout-of-data');
    element1.classList.remove('blur-me-black-shadow');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function account_display() {
    var element = document.querySelector('#acc-data');
    let element1=document.querySelector('.accout-of-data');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    element1.classList.add('blur-me-black-shadow');
    var element = document.querySelector('#dis');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function account_not_display() {
    var element = document.querySelector('#acc-data');
    let element1=document.querySelector('.accout-of-data');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
    element1.classList.remove('blur-me-black-shadow');
}


element.addEventListener('keypress',(e)=>{
   if(e.key=='Enter'){
    let search_val=element.value;
    console.log(search_val);
    window.localStorage.setItem('search-content',search_val);
    window.open('../html/search.html');

    
   }
});