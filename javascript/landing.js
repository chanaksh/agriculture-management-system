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

let element2=document.querySelector('#change-btn-email');

element2.addEventListener('click',()=>{
    
    window.open('../html/change_email.html');
    
});

let element3=document.querySelector('#change-btn-num');

element3.addEventListener('click',()=>{
    
    window.open('../html/change_number.html');
    
});

function alertme(){
    let name=document.querySelector('#name');
    let email=document.querySelector('#email');
    let extra=document.querySelector('#extra');
    if(name.value=="" || email.value=="" || extra.value==""){
        alert("please fill full information to contact with us")
       
    }
    else{
        
        alert("we will contact with us as soon as possible");
    }
}