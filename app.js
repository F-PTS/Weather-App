const axios = require('axios');

const WEATHER_API_KEY = '8cad63c32ef56ca20cf8e01f8506b018';
const WEATHER_URL = `http://api.weatherstack.com/forecast?access_key=${WEATHER_API_KEY}`;

const GEO_API_KEY = 'pk.eyJ1IjoicGl0dXNzIiwiYSI6ImNsNmRxeXY3cjE0djczYnFsb256NHRuaDMifQ.HQg_9QkXobu7kEqDG_f1bg';

const getWeather = (latitude, longitude) => {
    axios({ method: 'get', url: `${WEATHER_URL}&query="${latitude},${longitude}"`})
    .then(response => {
        const data = response.data;

        console.log(`${data.current.weather_descriptions}.\n\nIt is currenly ${data.current.temperature} dagrees out, but it feels like ${data.current.feelslike} dagrees today in ${data.location.name}, ${data.location.country}.`);
    })
    .catch(err => console.log(err));
};

const getGeoCode = place => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${GEO_API_KEY}`;

    axios({method: 'get', url})
        .then(response => {
            const latitude = response.data.features[0].center[1];
            const longitude = response.data.features[0].center[0];

            getWeather(latitude, longitude);
        })
        .catch(err => console.log(err));
}

getGeoCode('Slupsk');