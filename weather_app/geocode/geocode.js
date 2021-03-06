const request = require('request');

var geocodeAddress = (address, callback) => {
  // console.log(address);
  encoded_address = encodeURIComponent(address);
  // console.log(encoded_address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyC5acLSL7A_O9sumozsy78u3_0Gv4FLurw`,
    json: true
  }, (error, response, body) => {
    if (error) {
      // console.log('unable to connect to the google servers.');
      callback('unable to connect to the google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('unable to find that address');
    } else {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      // console.log(JSON.stringify(body, undefined, 2));
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`longitude: ${body.results[0].geometry.location.lng}`);
    }
  });

};

module.exports = {
  geocodeAddress
};
