const apiKey ="17a1b81e82e162307f4838a478e0befc";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const search_box = document.querySelector('input');
const search_btn = document.querySelector('button');

async function checkweather(mycity){
    const response= await fetch(apiUrl +mycity+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;

    document.querySelector(".temp").innerHTML=data.main.temp;

    document.querySelector(".hu-num").innerHTML=data.main.humidity+"%";

    document.querySelector(".wi-num").innerHTML=data.wind.speed+"km/h";

    document.querySelector('.description').innerHTML=data.weather[0].description;

    

    switch(data.weather[0].main){
       
        case "Rain":
        document.querySelector('.my-img-data').src = '../images/icon/rain.png';
        break;
        case "Clear":
        document.querySelector('.my-img-data').src = '../images/icon/clear.png';
        break;
        case "Snow":
        document.querySelector('.my-img-data').src = '../images/icon/snow.png';
        break;
        case "Mist":
        document.querySelector('.my-img-data').src = '../images/icon/mist.png';
        break;
        case 'Clouds':
        document.querySelector('.my-img-data').src = '../images/icon/cloud.webp';
        break;
        case "Haze":
        document.querySelector('.my-img-data').src='../images/icon/mist.png'
        break;

        default:
        document.querySelector('.my-img-data').src='../images/icon/cloud.webp';
    }


}



search_btn.addEventListener('click',()=>{
    checkweather(search_box.value);
});

search_btn.addEventListener('click',()=>{
    checkweather(search_box.value);
});


let element1=document.querySelector('.back-arrow');

element1.addEventListener('click',()=>{
    window.open('../html/landing page.html');
   });

let element4 = document.querySelector('#hide-data');

search_btn.addEventListener('click',()=>{
  element4.classList.remove('hide');
});