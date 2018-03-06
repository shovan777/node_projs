const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/61fa5398c76afd2ee5aa1d6db3f16e17/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // console.log('unable to connect to the google servers.');
      // console.log(body.currently.temperature);
      callback(undefined, {
        currentTemp: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      })
    } else {
      // console.log('unable to fetch weather data.');
      callback('unable to fetch weather data');
    }
  });
}


module.exports.getWeather = getWeather;
