const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon1 = document.querySelector('#weather-icon1');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc = document.querySelector('#cap');
const captionDesc1 = document.querySelector('#cap1');
const captionDesc2 = document.querySelector('#cap2');
// const windSpeed = document.querySelector('#wind-speed');
const humidity = document.querySelector('#humidity');
const humidity1 = document.querySelector('#humidity1');
const humidity2 = document.querySelector('#humidity2');
const alertMsg = document.querySelector('#alert-message');
const day1temp = document.querySelector('#day1-temp');
const day2temp = document.querySelector('#day2-temp');
// const windChill = document.querySelector('#feels-like');


//API URL with arguments  
// id for fairbanks alaska is 5861897
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.975&lon=-77.6419&cnt=24&appid=d10750740ac29f4c233177823a633962';


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // gets the temp for today tomorrow and next day
    let k = data.list[0].main.temp;
    f = ((k-273.15) * (9/5) + 32).toFixed(0);
    currentTemp.textContent = f;

    let k1 = data.list[8].main.temp;
    f1 = ((k-273.15) * (9/5) + 32).toFixed(0);
    day1temp.textContent = f1;

    let k2 = data.list[16].main.temp;
    f2 = ((k-273.15) * (9/5) + 32).toFixed(0);
    day2temp.textContent = f2;

    // gets the humidity for three days
    let h = data.list[0].main.humidity;
    humidity.textContent = h;

    let h1 = data.list[8].main.humidity;
    humidity1.textContent = h1;

    let h2 = data.list[16].main.humidity;
    humidity2.textContent = h2;



    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const desc = data.list[0].weather[0].description;

    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    const desc1 = data.list[0].weather[0].description;

    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    const desc2 = data.list[0].weather[0].description;

    // weather icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    captionDesc1.textContent = desc;

    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc;

    let msg = data.message;
    if (msg == 0)
    {
        alertMsg.textContent = "No weather alerts today";
    }
    else
    {
        alertMsg.textContent = msg;
    }



  });