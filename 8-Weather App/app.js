let weather = {
    "apiKey" : "173ad37913ec4b6528eefa777557eb19",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=173ad37913ec4b6528eefa777557eb19")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " +speed + "Km/h";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

const searchbtn = document.querySelector(".search");
searchbtn.addEventListener("click", () => {
    weather.search();
});

searchbtn.addEventListener("keyup", (event) => {
    if(event.key == "Enter"){
        weather.search();
    }
});