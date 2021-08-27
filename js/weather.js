const API_KEY = "2a6366106ba25b4272eaf5d6baa1d23e";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) =>{
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
  alert("당신의 위치와 날씨를 찾을 수 없습니다.") 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);