const request = require('postman-request');

const forecast = (long, lat, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=842a06836cae1855d95580c016e415e4&query=' +
    lat +
    ',' +
    long;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect to api services', undefined);
    } else if (body.error) {
      callback('unable to find location', undefined);
    } else {
      const data = body;
      callback(undefined, {
        country: data.location.country,
        weather_condition: data.current.weather_descriptions[0],
        precipitation: data.current.precip,
        temperature: data.current.temperature + ' Celsuis',
      });
    }
  });
};

module.exports = forecast;
