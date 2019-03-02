'use strict'
const fetch = require('node-fetch');
require('dotenv').config();
const KEY = process.env.WEATHER_KEY;
const CITY = process.argv.slice(2)
const url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY},uk&APPID=${KEY}`;

const getWeather = () => {
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
    })
}

getWeather()
