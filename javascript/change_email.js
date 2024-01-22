function myfun(){

    let email=document.querySelector('#e-mail');
    if(email.value==""){
        alert("enter your new email");
    }
    else{
    let element=document.querySelector('#ani');
    element.classList.add('show');
    element.classList.remove('hide');
    window.open('../html/landing page.html')
    }
}