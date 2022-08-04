const axios = require('axios');

const geoCode = require('./geocode.js');

const WEATHER_API_KEY = '8cad63c32ef56ca20cf8e01f8506b018';
const WEATHER_URL = `http://api.weatherstack.com/forecast?access_key=${WEATHER_API_KEY}`;

const getWeather = async place => {

    const {latitude, longitude} = await geoCode(place);

    console.log(latitude + '\n' + longitude)

    const response = await axios.get(`${WEATHER_URL}&query="${latitude},${longitude}"`)
    return{
        weather: data.current.weather_descriptions,
        temperature: data.current.temperature,
        feelsLike: data.current.feelslike,
        locationName: data.location.name,
        country: data.location.country
    }
};

module.exports = getWeather;