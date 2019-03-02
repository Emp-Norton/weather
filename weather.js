'use strict'
const fetch = require('node-fetch');
require('dotenv').config();
const KEY = process.env.WEATHER_KEY;
const CITY = process.argv.slice(2)
let url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY},us&APPID=${KEY}`;


const getWeather = () => {
  url = encodeURI(url)
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
    })
}

getWeather()
