const axios = require('axios');

const geoCode = require('./geocode.js');

const WEATHER_API_KEY = '8cad63c32ef56ca20cf8e01f8506b018';

const getWeather = async place => {

    const {err, latitude, longitude} = await geoCode(place);

    if(!err) {
        const url = `http://api.weatherstack.com/forecast?access_key=${WEATHER_API_KEY}&query="${latitude},${longitude}"`;

        const response = await axios.get(url);

        return {
            weather: response.data.current.weather_descriptions,
            temperature: response.data.current.temperature,
            feelsLike: response.data.current.feelslike,
            locationName: response.data.location.name,
            country: response.data.location.country
        };
    }

    return {err}

};

module.exports = getWeather;