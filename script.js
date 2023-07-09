const city= document.getElementById('placename');
const date= document.querySelector('.date');
const description= document.getElementById('description');
const humid= document.getElementById('humid');
const temp=document.getElementById('temp');
const wind= document.getElementById('wind');
const inputcity= document.getElementById('input-city');
const sumbitBtn = document.getElementById('submitBtn');

async function getWeather(cityname){
   const key='d2d194d03532d1d0f0ca38bc2decb6b2';
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

  const weather_data = await fetch(`${url}`).then(res=>res.json());
  console.log(weather_data);

  city.innerHTML = `${weather_data.name}`;
  humid.innerHTML= `${weather_data.main.humidity}%`;
  temp.innerHTML= `${Math.round(weather_data.main.temp - 273)}°C`;
  wind.innerHTML= `${weather_data.wind.speed}km/h`;
  description.innerHTML= `${weather_data.weather[0].description}`;
  date.innerHTML= `${new Date().toDateString()}`;

}

sumbitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    getWeather(inputcity.value);
});
