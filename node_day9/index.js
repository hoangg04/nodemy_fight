let search = document.querySelector('input[type="text"]'),
	address = document.querySelector(".address"),
	time = document.querySelector(".time"),
	temperature = document.querySelector(".temperature"),
	humidity = document.querySelector(".inner-humidity"),
	innerStatus = document.querySelector(".status"),
	visibility = document.querySelector(".inner-visibility"),
	windSpeed = document.querySelector(".inner-speed"),
	cardContent = document.querySelector(".card-content"),
	card = document.querySelector(".card");


function changeWeatherUI(data){
	if(data.cod == 200){
		let temp = data.main.temp;
		cardContent.style.visibility = "visible";
		cardContent.style.opacity = "1";
		address.innerHTML = data.name + "," + data.sys.country;
		temperature.innerHTML =`<span> ${temp} <sup>o</sup>C</span>`;
		time.innerHTML = new Date().toLocaleString('vi');
		humidity.innerHTML = data.main.humidity + '%';
		innerStatus.innerHTML = data.weather[0] ? data.weather[0].main : '';
		visibility.innerHTML = data.visibility;
		windSpeed.innerHTML = data.wind.speed +"m/s";
		if(temp <= 25){
			card.style.backgroundImage = "url(cold.png)";
		}else{
			card.style.backgroundImage = "url(hot.png)";
		}
	}
	else{
		cardContent.style.visibility = "hidden";
		cardContent.style.opacity = "0";
	}
}
function getWeather(city){
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c82d0d4fd58df29a3334bdf69a46ef2a`;
	fetch(url).then(res => res.json())
	.then((data)=>{
		changeWeatherUI(data);
	})
}
search.addEventListener('keydown',(e)=>{
	if(e.keyCode == 13){
        getWeather(search.value.trim());
		search.value = "";
	}
})
getWeather('hanoi');