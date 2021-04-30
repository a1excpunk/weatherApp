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

//week day temps
let weekFetchedTemp =
    document.querySelectorAll('.fetched-value');
const monday = weekFetchedTemp[0];
const tuesday = weekFetchedTemp[1];
const wednesday = weekFetchedTemp[2];
const thursday = weekFetchedTemp[3];
const friday = weekFetchedTemp[4];
const saturday = weekFetchedTemp[5];
const sunday = weekFetchedTemp[6];


// week day
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekDayValue = new Date().getDay();
weekDay.innerHTML = weekDays[weekDayValue]


// time stamp
function getTime() {
    let time = new Date()
    if (time.getHours() < 10 && time.getMinutes() < 10) {
        localTime.innerHTML = `0${time.getHours()}:0${time.getMinutes()}`
    }else if (time.getHours() < 10) {
        localTime.innerHTML = '0' + time.getHours() + ':' + time.getMinutes()
    } else if (time.getMinutes() < 10) {
        localTime.innerHTML = time.getHours() + ':0' + time.getMinutes()
    } else {
        localTime.innerHTML = time.getHours() + ':' + time.getMinutes()
    }
}

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
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=def095bd9d82a382b7703effa3533fac`)
                .then(Response => Response.json())
                .then(data => fetchedWeekWeather(data))
        }
        function error() {
            console.log("Geolocation Error!:(");
        }
    }
}

// Week weather
function fetchedWeekWeather(data) {
    const mondayValue = data['daily'][1]['temp']['day'];
    monday.innerHTML = mondayValue.toFixed(0);

    const tuesdayValue = data['daily'][2]['temp']['day'];
    tuesday.innerHTML = tuesdayValue.toFixed(0);

    const wednesdayValue = data['daily'][3]['temp']['day'];
    wednesday.innerHTML = wednesdayValue.toFixed(0);

    const thursdayValue = data['daily'][4]['temp']['day'];
    thursday.innerHTML = thursdayValue.toFixed(0);

    const fridayValue = data['daily'][5]['temp']['day'];
    friday.innerHTML = fridayValue.toFixed(0);

    const saturdayValue = data['daily'][6]['temp']['day'];
    saturday.innerHTML = saturdayValue.toFixed(0);

    const sundayValue = data['daily'][0]['temp']['day'];
    sunday.innerHTML = sundayValue.toFixed(0);

    const cityNameValue = data['timezone'].split('/').pop();
    cityName.innerHTML = cityNameValue;
    console.log(data);

    const mainTempValue = data['current']['temp'];
    mainTemp.innerHTML = mainTempValue.toFixed(0);

    const weatherTextValue = data['current']['weather'][0]['main'];
    weatherText.innerHTML = weatherTextValue;

    const feelsLikeTempValue = data['current']['feels_like'].toFixed(0);
    feelsLikeTemp.innerHTML = feelsLikeTempValue;

    const humidityValue = data['current']['humidity'];
    humidity.innerHTML = humidityValue;

    const pressureValue = data['current']['pressure'];
    pressure.innerHTML = pressureValue;

    const visibilityValue = data['current']['visibility'];
    visibility.innerHTML = (visibilityValue / 1000).toFixed(0);

    const windSpeedValue = data['current']['wind_speed'];
    windSpeed.innerHTML = windSpeedValue.toFixed(1);

    const minTempValue = data['daily'][weekDayValue]['temp']['min'];
    minTemp.innerHTML = minTempValue.toFixed(0);

    const maxTempValue = data['daily'][weekDayValue]['temp']['max'];
    maxTemp.innerHTML = maxTempValue.toFixed(0);
}

// toggle weather details and week weather panels
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

    document.querySelector('footer').style.position = "static"
})


// fetched data
function fetchedData(data) {
    console.log(data);
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

window.addEventListener('load', getTime)
window.addEventListener('click', getTime)
window.addEventListener("load", getLocation)

// rethrew data,(for converting) from input to lat and lon but recieved data is too bad to display. but maybe code will be useful

// input.addEventListener("keydown", (event) => {
//     if (event.code == "Enter") {
//         const lat = (data)=> data['coord']['lat'];
//         const lon = (data)=> data['coord']['lon'];

//         fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//         )
//             .then((Response) => Response.json())
//             .then((data) => {
//                 lat(data);
//                 lon(data);
//                 input.value = "";
//                 console.log(lat(data), lon(data));
//                 fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat(data)}&lon=${lon(data)}&units=metric&exclude=hourly,minutely&appid=def095bd9d82a382b7703effa3533fac`)
//                     .then(Response => Response.json())
//                     .then(data => fetchedWeekWeather(data))
//             });


//     }
// });