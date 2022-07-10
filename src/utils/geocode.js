const request = require('postman-request');

const geocode = (city, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    city +
    '.json?access_token=pk.eyJ1IjoibWFuYXNyYWo5NjY5IiwiYSI6ImNsNTd6MjdpajA2NTUzYnJ2M2VjMThzaGMifQ.kB5BGM3CZjF5cX1qbN0ykA&limit=1';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      //  console.log('unable to connect to weather service');
      callback('unable to connect to weather service', undefined);
    } else if (body.features.length === 0) {
      callback('unable to find location, try another search', undefined);
    } else {
      const data = body;
      const lat = data.features[0].center[1];
      const long = data.features[0].center[0];
      callback(error, {
        lat,
        long,
      });
    }
  });
};

module.exports = geocode;
