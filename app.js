const postmanRequest = require('postman-request');
const forecast = require('./utils.js');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('', (req, res) => {
    res.send('Hello world');
})

app.get('/another', (req, res) => {
    console.log('funguje i v consoli');
    res.send('fungujeeee');
})

app.listen(port, () => {
    console.log('this app listen up on port 3000');
})







// const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/prague.json?access_token=pk.eyJ1IjoibWFydGlubWFydGluMTIzNDU2IiwiYSI6ImNrbm5tMWd0cTBzN2Qydmt4NGtoZzV0ZWwifQ.JCyHXpQXco992Ja5uteiEA&limit=1'
//
// postmanRequest.get(urlGeo, (error, response) => {
//     const res = JSON.parse(response.body);
//     const center = res.features.pop().center;
//     console.log(`delka ${center[0]} sirka ${center[1]}`);
// } )

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
