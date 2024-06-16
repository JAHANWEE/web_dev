const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0ed9aacea9msh2c70778e333ce6cp106967jsn1cb239166156", // Replace with your actual API key
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather =(city) =>{
  cityName.innerHTML =city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {

    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML= response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    wind_speed2.innerHTML = response.wind_speed
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed

    cloud_pct2.innerHTML = response.cloud_pct
  })
  .catch((err) => console.log(err));
}

submit.addEventListener("click" ,(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")