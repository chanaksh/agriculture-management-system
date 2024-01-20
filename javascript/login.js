var x=document.querySelector('#Login');
var y=document.querySelector('#register');
var z=document.querySelector('.btn');
var d=document.querySelector('.container-login')

function register(){
  x.style.left="-40rem";
  y.style.left="5rem";
  z.style.left="11rem";
  
  d.classList.add('long');
  d.classList.remove('short');
}
function login(){
  x.style.left="5rem";
  y.style.left="45rem";
  z.style.left="0";
  d.classList.remove('long');
  d.classList.add('short');
}

function sendOTP(){
 
  event.preventDefault();
   const email=document.querySelector('#email');
   const otpverify = document.querySelector('#otp_inp');
   console.log(otpverify.value);
   let opt_val = Math.floor(Math.random()*9000) + 1000;
   let emailbody = `<h2>Your OTP is ${opt_val}</h2>`;
  
   

   Email.send({
   SecureToken : "d57c1035-2eb4-46e7-b1d6-e2dfb4767415",
   To : email.value,
   From : "our_web@gmail.com",
   Subject : "This is your otp for login",
   Body : emailbody
   }).then(message => {
    if (message == "ok"){
      alert("OTP sent to your email "+ email.value);
      

      const otp_inp = document.querySelector('#otp_inp');
      const otp_btn = document.querySelector('#otp_btn');

      otp_btn.addEventListener('click', ()=> {
        if (otp_inp.value === opt_val.toString()){
          alert("email address verified");

        }else{
          alert("OTP invalid");
        }
      });
    }
   }).catch(
    error => 
    {
      console.log(error)
      console.error('Error sending email:', error);
      // alert('Error sending email. Check the console for details.');
    });

}

document.getElementById('generateBtn').addEventListener('click',sendOTP)
