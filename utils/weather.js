const axios = require('axios');

const geoCode = require('./geocode.js');

const WEATHER_API_KEY = '8cad63c32ef56ca20cf8e01f8506b018';
const WEATHER_URL = `http://api.weatherstack.com/forecast?access_key=${WEATHER_API_KEY}`;

const getWeather = async place => {

    const {latitude, longitude} = await geoCode(place);

    console.log(latitude + '\n' + longitude)

    axios({ method: 'get', url: `${WEATHER_URL}&query="${latitude},${longitude}"`})
    .then(response => {
        const data = response.data;

        console.log(`${data.current.weather_descriptions}.\n\nIt is currenly ${data.current.temperature} dagrees out, but it feels like ${data.current.feelslike} dagrees today in ${data.location.name}, ${data.location.country}.`);
    })
    .catch(err => console.log(err));
};

module.exports = getWeather;