'use strict';
const mailer = require('./mailerService.js');
const logger = require('./historyService.js');
const fetch = require('node-fetch');
const gpio = require('onoff').Gpio;
const rainLed = new gpio(17, 'out')
const sunLed = new gpio(22, 'out');
require('dotenv').config();

const KEY = process.env.WEATHER_KEY;
const CITY = process.argv.slice(2);

const cityString = CITY.join('%20');
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityString},us&APPID=${KEY}`;

const parseWeatherResponse = (response) => {
  const weather = response.weather[0];
  if (weather['main'] == 'Rain') {
    return 'rain'
  }
  return 'sun'
}

const getWeather = () => {
  console.log(`fetching ${url}`);
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      let weather = parseWeatherResponse(data);
      console.log(weather);
      if (weather == 'rain') {
        rainLed.writeSync(1)
      }
      if (weather == 'sun') {
        sunLed.writeSync(1)
      }
//      logger.writeLog('weather', data)
      return data
    })
    .catch(function(error){
      console.log('Gone fucky');
      console.log(error);
    })
}

getWeather();
