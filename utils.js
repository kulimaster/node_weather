const postmanRequest = require('postman-request');

const forecast = (lat, lon, callbeck) => {
    const url = 'http://api.weatherstack.com/current?access_key=9f3556ee803243ed919d23188bdac060&query=' + lon + ',' + lat;

    postmanRequest.get(url, (error, response, body) => {
        if (error) {
            callbeck(error, undefined)
        }
        else {
            const result = JSON.parse(response.body)
            callbeck(undefined, result)
        }
    })
}

module.exports = forecast;
