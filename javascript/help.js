let element1=document.querySelector('.back-arrow');

element1.addEventListener('click',()=>{
    window.open('../html/landing page.html');
   });

let answer_one=document.querySelector('#answer-one');
let answer_two=document.querySelector('#answer-two');
let answer_three=document.querySelector('#answer-three');
let answer_four=document.querySelector('#answer-four');
let answer_five=document.querySelector('#answer-five');
let answer_six=document.querySelector('#answer-six');
let answer_seven=document.querySelector('#answer-seven');
let answer_eight=document.querySelector('#answer-eight');
let answer_nine=document.querySelector('#answer-nine');
let answer_ten=document.querySelector('#answer-ten');

let up_one=document.querySelector('#up-one');
let up_two=document.querySelector('#up-two');
let up_three=document.querySelector('#up-three');
let up_four=document.querySelector('#up-four');
let up_five=document.querySelector('#up-five');
let up_six=document.querySelector('#up-six');
let up_seven=document.querySelector('#up-seven');
let up_eight=document.querySelector('#up-eight');
let up_nine=document.querySelector('#up-nine');
let up_ten=document.querySelector('#up-ten');

let down_one=document.querySelector('#down-one');
let down_two=document.querySelector('#down-two');
let down_three=document.querySelector('#down-three');
let down_four=document.querySelector('#down-four');
let down_five=document.querySelector('#down-five');
let down_six=document.querySelector('#down-six');
let down_seven=document.querySelector('#down-seven');
let down_eight=document.querySelector('#down-eight');
let down_nine=document.querySelector('#down-nine');
let down_ten=document.querySelector('#down-ten');


// one 
down_one.addEventListener('click',()=>{
    answer_one.classList.add('show');
    answer_one.classList.remove('hide');
    down_one.classList.remove('visible');
    down_one.classList.add('hidden');
    up_one.classList.add('visible');
    up_one.classList.remove('hidden');
});

up_one.addEventListener('click',()=>{
    answer_one.classList.remove('show');
    answer_one.classList.add('hide');
    down_one.classList.remove('hidden');
    down_one.classList.add('visible');
    up_one.classList.add('hidden');
    up_one.classList.remove('visible');
  
});

//two
down_two.addEventListener('click',()=>{
    answer_two.classList.add('show');
    answer_two.classList.remove('hide');
    down_two.classList.remove('visible');
    down_two.classList.add('hidden');
    up_two.classList.add('visible');
    up_two.classList.remove('hidden');
});

up_two.addEventListener('click',()=>{
    answer_two.classList.remove('show');
    answer_two.classList.add('hide');
    down_two.classList.remove('hidden');
    down_two.classList.add('visible');
    up_two.classList.add('hidden');
    up_two.classList.remove('visible');
  
});

//three

down_three.addEventListener('click',()=>{
    answer_three.classList.add('show');
    answer_three.classList.remove('hide');
    down_three.classList.remove('visible');
    down_three.classList.add('hidden');
    up_three.classList.add('visible');
    up_three.classList.remove('hidden');
});

up_three.addEventListener('click',()=>{
    answer_three.classList.remove('show');
    answer_three.classList.add('hide');
    down_three.classList.remove('hidden');
    down_three.classList.add('visible');
    up_three.classList.add('hidden');
    up_three.classList.remove('visible');
  
});

//four
down_four.addEventListener('click',()=>{
    answer_four.classList.add('show');
    answer_four.classList.remove('hide');
    down_four.classList.remove('visible');
    down_four.classList.add('hidden');
    up_four.classList.add('visible');
    up_four.classList.remove('hidden');
});

up_four.addEventListener('click',()=>{
    answer_four.classList.remove('show');
    answer_four.classList.add('hide');
    down_four.classList.remove('hidden');
    down_four.classList.add('visible');
    up_four.classList.add('hidden');
    up_four.classList.remove('visible');
  
});

//five
down_five.addEventListener('click',()=>{
    answer_five.classList.add('show');
    answer_five.classList.remove('hide');
    down_five.classList.remove('visible');
    down_five.classList.add('hidden');
    up_five.classList.add('visible');
    up_five.classList.remove('hidden');
});

up_five.addEventListener('click',()=>{
    answer_five.classList.remove('show');
    answer_five.classList.add('hide');
    down_five.classList.remove('hidden');
    down_five.classList.add('visible');
    up_five.classList.add('hidden');
    up_five.classList.remove('visible');
  
});

//six
down_six.addEventListener('click',()=>{
    answer_six.classList.add('show');
    answer_six.classList.remove('hide');
    down_six.classList.remove('visible');
    down_six.classList.add('hidden');
    up_six.classList.add('visible');
    up_six.classList.remove('hidden');
});

up_six.addEventListener('click',()=>{
    answer_six.classList.remove('show');
    answer_six.classList.add('hide');
    down_six.classList.remove('hidden');
    down_six.classList.add('visible');
    up_six.classList.add('hidden');
    up_six.classList.remove('visible');
  
});

//seven
down_seven.addEventListener('click',()=>{
    answer_seven.classList.add('show');
    answer_seven.classList.remove('hide');
    down_seven.classList.remove('visible');
    down_seven.classList.add('hidden');
    up_seven.classList.add('visible');
    up_seven.classList.remove('hidden');
});

up_seven.addEventListener('click',()=>{
    answer_seven.classList.remove('show');
    answer_seven.classList.add('hide');
    down_seven.classList.remove('hidden');
    down_seven.classList.add('visible');
    up_seven.classList.add('hidden');
    up_seven.classList.remove('visible');
  
});

//eight
down_eight.addEventListener('click',()=>{
    answer_eight.classList.add('show');
    answer_eight.classList.remove('hide');
    down_eight.classList.remove('visible');
    down_eight.classList.add('hidden');
    up_eight.classList.add('visible');
    up_eight.classList.remove('hidden');
});

up_eight.addEventListener('click',()=>{
    answer_eight.classList.remove('show');
    answer_eight.classList.add('hide');
    down_eight.classList.remove('hidden');
    down_eight.classList.add('visible');
    up_eight.classList.add('hidden');
    up_eight.classList.remove('visible');
  
});

//nine
down_nine.addEventListener('click',()=>{
    answer_nine.classList.add('show');
    answer_nine.classList.remove('hide');
    down_nine.classList.remove('visible');
    down_nine.classList.add('hidden');
    up_nine.classList.add('visible');
    up_nine.classList.remove('hidden');
});

up_nine.addEventListener('click',()=>{
    answer_nine.classList.remove('show');
    answer_nine.classList.add('hide');
    down_nine.classList.remove('hidden');
    down_nine.classList.add('visible');
    up_nine.classList.add('hidden');
    up_nine.classList.remove('visible');
  
});

//ten
down_ten.addEventListener('click',()=>{
    answer_ten.classList.add('show');
    answer_ten.classList.remove('hide');
    down_ten.classList.remove('visible');
    down_ten.classList.add('hidden');
    up_ten.classList.add('visible');
    up_ten.classList.remove('hidden');
});

up_ten.addEventListener('click',()=>{
    answer_ten.classList.remove('show');
    answer_ten.classList.add('hide');
    down_ten.classList.remove('hidden');
    down_ten.classList.add('visible');
    up_ten.classList.add('hidden');
    up_ten.classList.remove('visible');
  
});