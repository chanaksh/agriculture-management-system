let add_cart=document.querySelector('#add-cart');
let pop=document.querySelector('#pop');
let details_page=document.querySelector('#details-of-ferti');
let no_btn=document.querySelector('#no-btn');
let yes_btn=document.querySelector('#yes-btn');
add_cart.addEventListener('click',()=>{
  details_page.classList.add('blur-me');
  pop.classList.remove('hide');
  pop.classList.add('show');
});

no_btn.addEventListener('click',()=>{
   pop.classList.remove('show');
  pop.classList.add('hide');
  details_page.classList.remove('blur-me');
});