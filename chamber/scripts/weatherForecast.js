// create layout in HTML and create the selectors here
const weatherCard = document.querySelector('.weather-card');
const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=10.48155789576067&lon=-66.91096611098436&units=imperial&appid=d13b07c3eea7b641ed4c2925c810a8a9';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.table(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

apiFetch(forecastURL);

function displayForecast(data) {

    for (let i = 7; i < 24; i += 8) {
        
        let figureElement = document.createElement('figure');
        let dayOfWeek = document.createElement('p');
        let weatherIcon = document.createElement('img');
        let temp = document.createElement('p');
        let figDesc = document.createElement('figcaption');

        let d = new Date(data.list[i].dt*1000);
        let day = weekday[d.getDay()];
        let iconsrc = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
        let dayTemp = data.list[i].main.temp;
        let description = data.list[i].weather[0].description;

        dayOfWeek.textContent = day;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', description);
        temp.textContent = `${dayTemp}°F`;
        figDesc.textContent = `${description}`;

        figureElement.appendChild(dayOfWeek);
        figureElement.appendChild(weatherIcon);
        figureElement.appendChild(temp);
        figureElement.appendChild(figDesc);

        weatherCard.appendChild(figureElement);
    }

    

    
    // create HTML elements and populate them with forecast data
}