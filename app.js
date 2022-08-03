const axios = require('axios');

const API_KEY = '8cad63c32ef56ca20cf8e01f8506b018';

const WEATHER_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}`;

axios({ method: 'get', url: `${WEATHER_URL}&query="52.237049,21.017532"`})
    .then(response => {const data = response.data; console.log(data.current)})
    .catch(err => console.log(err));