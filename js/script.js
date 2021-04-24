const $ = (id) => document.getElementById(`${id}`)

const body = document.querySelector('body');

// main panel
const mainTemp = $('main-temp');
const weatherText = $('weather-text');
const cityName = $('city-name');
const feelsLikeTemp = $('feels-like-temp');

const localTime = $('time');
const weekDay = $('week-day');

const weatherDetailButton = $('weather-detail-button');

//weather details panel
const weatherDetailsContainer = $('weather-details-container');
const exitButton = $('exit-button')

const humidity = $('humidity')
const pressure = $('pressure')
const visibility = $('visibility')
const windSpeed = $('wind')
const minTemp = $('min-temp')
const maxTemp = $('max-temp')

//aside panel
const input = $('input')
const searchButton = $('search')

const cities = $('cities')
const beijing = $('beijing-city')
const newYork = $('newyork-city')
const moscow = $('moscow-city')
const tokyo = $('tokyo-city')





// week day
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekDayValue = new Date();
weekDay.innerHTML = weekDays[weekDayValue.getDay()]


// time stamp
function getTime() {
    let time = new Date()
    if (time.getMinutes() < 10) {
        localTime.innerHTML = time.getHours() + ':0' + time.getMinutes()
    } else {
        localTime.innerHTML = time.getHours() + ':' + time.getMinutes()
    }
}
window.addEventListener('load', getTime)


// geolocation
function getLocation() {
    if (!navigator.geolocation) {
        console.log("Geolocation API not supported by this browser :(");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
        function success(position) {
            let latitude =
                Number(position.coords.latitude.toFixed(4));
            let longitude = Number(position.coords.longitude.toFixed(4));
            console.log(latitude, longitude);
            return latitude, longitude
        }
        function error() {
            console.log("Geolocation Error!:(");
        }
    }
}
window.addEventListener("load", getLocation)


// toggle weather details panel
exitButton.addEventListener('click', function () {
    weatherDetailsContainer.classList.add('scale-out-center')
    setTimeout(() => {
        weatherDetailsContainer.classList.add('hidden')
        weatherDetailsContainer.classList.remove('scale-out-center')
    }, 700)

})
weatherDetailButton.addEventListener('click', function () {
    if (weatherDetailsContainer.classList.contains('hidden')) {
        weatherDetailsContainer.classList.remove('hidden')
    } else {
        weatherDetailsContainer.classList.add('swing-out-top-bck')
        setTimeout(() => {
            weatherDetailsContainer.classList.remove('swing-out-top-bck')
            weatherDetailsContainer.classList.add('hidden')
        }, 700)
    }
})

// fetched data
function fetchedData(data) {
    const mainTempValue = data['main']['temp'];
    mainTemp.innerHTML = mainTempValue.toFixed(0);

    const weatherTextValue = data['weather'][0]['main'];
    weatherText.innerHTML = weatherTextValue;

    const cityNameValue = data['name'];
    cityName.innerHTML = cityNameValue;

    const feelsLikeTempValue = data['main']['feels_like'];
    feelsLikeTemp.innerHTML = feelsLikeTempValue.toFixed(0);

    const humidityValue = data['main']['humidity'];
    humidity.innerHTML = humidityValue;

    const pressureValue = data['main']['pressure'];
    pressure.innerHTML = pressureValue;

    const visibilityValue = data['visibility'];
    visibility.innerHTML = (visibilityValue / 1000).toFixed(0);

    const windSpeedValue = data['wind']['speed'];
    windSpeed.innerHTML = windSpeedValue.toFixed(1);

    const minTempValue = data['main']['temp_min'];
    minTemp.innerHTML = minTempValue.toFixed(0);

    const maxTempValue = data['main']['temp_max'];
    maxTemp.innerHTML = maxTempValue.toFixed(0);
}

beijing.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=beijing&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
newYork.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
tokyo.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
moscow.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});


//input search
input.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
        )
            .then((Response) => Response.json())
            .then((data) => {
                fetchedData(data);
                input.value = "";
            });
    }
});
searchButton.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
            input.value = "";
        });
});

