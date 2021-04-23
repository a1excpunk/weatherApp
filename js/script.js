
setInterval(() => {
    document.querySelector('body').style.backgroundImage = "url(../assets/image2.jpg)"
}, 10000)
setInterval(() => {
    document.querySelector('body').style.backgroundImage = "url(../assets/image3.jpg)"
}, 15000)
setInterval(() => {
    document.querySelector('body').style.backgroundImage = "url(../assets/image4.jpg)"
}, 20000)
setInterval(() => {
    document.querySelector('body').style.backgroundImage = "url(../assets/image5.jpg)"
}, 25000)
setInterval(() => {
    document.querySelector('body').style.backgroundImage = "url(../assets/image6.jpg)"
}, 30000)


document.getElementById('exit-button').addEventListener('click', function () {
    document.getElementById('weather-details-container').classList.add('scale-out-center')
    setTimeout(() => {
        document.getElementById('weather-details-container').classList.add('hidden')
        document.getElementById('weather-details-container').classList.remove('scale-out-center')
    }, 700)

})

document.getElementById('weather-detail-button').addEventListener('click', function () {
    if (document.getElementById('weather-details-container').classList.contains('hidden')) {
        document.getElementById('weather-details-container').classList.remove('hidden')
    } else{
        document.getElementById('weather-details-container').classList.add('swing-out-top-bck')
        setTimeout(() => {
            document.getElementById('weather-details-container').classList.remove('swing-out-top-bck')
            document.getElementById('weather-details-container').classList.add('hidden')
        }, 700)
    }
})
























// //npm package for date formatting
// // var moment = require('moment')
// // const currentDate = moment(new Date()).format("LL");

// //  shorthand function for id's
// const docById = (id) => document.getElementById(`${id}`);

// // DOM element declarations/assignments (weather details)
// //~main content
// const body = document.getElementsByTagName("body")[0];
// const mainContent = docById("main_content");
// const sideContent = docById("side_content");
// const mainTemp = docById("main_temp");
// const tempUnit = docById("tempUnit");
// const weatherMain = docById("weather_main");
// const feelsLikeTemp = docById("feels_like_temp");
// const cityName = docById("city_name");
// let date = docById("date");
// const searchBtn = docById("search");
// //~side content
// const input = docById("input");
// const humidity = docById("humidity");
// const presure = docById("presure");
// const visibility = docById("visibility");
// const wind = docById("wind");
// const minTemp = docById("temp_min");
// const maxTemp = docById("temp_max");

// //~ (main cities)
// const beijing = docById("beijing_city");
// const newYork = docById("newyork_city");
// const tokyo = docById("tokyo_city");
// const moscow = docById("moscow_city");

// // adding events to DOM elemnts (default cities)
// //~getting API
// //attaching fetched data to DOM
// function fetchedData(data) {
//     const weatherMainValue = data["weather"][0]["main"];
//     const tempValue = data["main"]["temp"];
//     const feelsLikeTempValue = data["main"]["feels_like"];
//     const cityNameValue = data["name"];

//     const humidityValue = data["main"]["humidity"];
//     const presureValue = data["main"]["pressure"];
//     const visibilityValue = data["visibility"];
//     const weatherDescriptionValue = data["weather"][0]["description"];
//     const windValueSpeed = data["wind"]["speed"];
//     const minTempValue = data["main"]["temp_min"];
//     const maxTempValue = data["main"]["temp_max"];

//     mainTemp.innerHTML = Math.round(tempValue);
//     weatherMain.innerHTML = weatherMainValue;
//     feelsLikeTemp.innerHTML = "feels like " + feelsLikeTempValue;
//     cityName.innerHTML = cityNameValue;
//     humidity.innerHTML = "humidity: " + humidityValue;
//     presure.innerHTML = "pressure: " + presureValue;
//     visibility.innerHTML = "visibility: " + visibilityValue;
//     wind.innerHTML = "wind speed: " + windValueSpeed;
//     minTemp.innerHTML = "min temp: " + minTempValue;
//     maxTemp.innerHTML = "max temp: " + maxTempValue;
//     date.innerHTML = formattedTime(new Date());
// }
// //default cities
// beijing.addEventListener("click", () => {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=beijing&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//     )
//         .then((Response) => Response.json())
//         .then((data) => {
//             fetchedData(data);
//         });

//     // document.getElementById("weather_details_content").style.display = 'block'
//         // body.style.backgroundImage = 'url(C:/Users/User/Desktop/weatherApp/weatherApp/assets/ice.jpg)'
//         // body.style.backgroundSize = 'cover'

// });
// newYork.addEventListener("click", () => {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//     )
//         .then((Response) => Response.json())
//         .then((data) => {
//             fetchedData(data);
//             console.log(data)
//         });
// });
// tokyo.addEventListener("click", () => {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//     )
//         .then((Response) => Response.json())
//         .then((data) => {
//             fetchedData(data);
//         });
// });
// moscow.addEventListener("click", () => {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//     )
//         .then((Response) => Response.json())
//         .then((data) => {
//             fetchedData(data);
//         });
// });
// //general input
// input.addEventListener("keyup", (event) => {
//     if (event.code == "Enter") {
//         fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//         )
//             .then((Response) => Response.json())
//             .then((data) => {
//                 fetchedData(data);
//                 input.value = "";
//             });
//     }
// });
// searchBtn.addEventListener("click", () => {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
//     )
//         .then((Response) => Response.json())
//         .then((data) => {
//             fetchedData(data);
//             input.value = "";
//         });
// });

// //current date
// // date.innerText = currentDate;

// // ('keyup', function(event) {
// //     if (event.code === 'Enter') {
// // //in case of form is needed default prevention, so page won't reload
// //       event.preventDefault();
// //       document.querySelector('form').submit();
// //     }
// //   });

// //~converting JSON time to normal time
// function formattedTime(time) {
//     const date = new Date(time);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     // const seconds = date.getSeconds();
//     const formattedTime = hours + ":" + minutes;
//     return formattedTime;
// }

// //geolocation //NOTE: attach properly
// //maybe implement try{} catch(){} block?
// function getLocation() {
//     if (!navigator.geolocation) {
//         console.log("Geolpocation API not supported by this browser :(");
//     } else {
//         console.log("Chechikng Location :)");
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// }

// function success(position) {
//     console.log(position);
// }

// function error() {
//     console.log("Geolocation Error!:(");
// }

// //document.getElementById("get-location").addEventListener("click", getLocation);

// //~style
// //on click style change //! not filished

// let pageBCKimage = body.style.backgroundImage;
// let pageBCKimageRepeat = body.style.backgroundRepeat;
// let pageBCKimagePosition = body.style.backgroundPosition;
// let pageBCKimageAttachement = body.style.backgroundAttachment;
// let pageBCKimageSize = body.style.backgroundSize;

// beijing.addEventListener("click", () => {});
// newYork.addEventListener("click", () => { });
// tokyo.addEventListener("click", () => { });
// moscow.addEventListener("click", () => { });
