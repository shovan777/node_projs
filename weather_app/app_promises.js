const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encoded_address = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyC5acLSL7A_O9sumozsy78u3_0Gv4FLurw`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('unable to find the address');
  }
  // if the program enters into the above if
  // the error is thrown and program flows into catch and does not execute
  // the line below ie. console.log()
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/61fa5398c76afd2ee5aa1d6db3f16e17/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemprature = response.data.currently.apparentTemperature;
  console.log(`its currently ${temperature}. It feels like ${apparentTemprature}`)
}).catch((e) => { //catches errors for both promises
  if (e.code == 'ENOTFOUND') {
    console.log('unable to connect to api servers');
  } else {
    console.log(e.message);
  }
  // console.log(e);
});






// // 61fa5398c76afd2ee5aa1d6db3f16e17
// // api key for weather app

// lat, long, callback(errorMessage, results)
