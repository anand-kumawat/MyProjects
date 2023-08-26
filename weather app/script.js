const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08fbbc1e83msh063c76c5e7a28f2p1b1ad7jsn7258a8ff2b08',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityname.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then(response =>{

		
		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		humidity2.innerHTML = response.humidity
		wind_speed2.innerHTML = response.wind_speed
		temp.innerHTML = response.temp 
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity 
		min_temp.innerHTML = response.min_temp 
		max_temp.innerHTML = response.max_temp 
		wind_speed.innerHTML = response.wind_speed 
		wind_degrees.innerHTML = response.wind_degrees 
		sunrise.innerHTML = response.sunrise 
		sunset.innerHTML = response.sunset 
		
	})

	
	
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Jaipur");
	