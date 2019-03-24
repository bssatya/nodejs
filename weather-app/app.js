const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/37.8267,-122.4233?unit=auto&exclude=[minutely, hourly, alerts, flags]'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('unable to find the location')
//     } else {
//         console.log(response.body.currently)
//         console.log(response.body.daily.data[0].summary)
//         console.log('Its currnetly '+ response.body.currently.temperature + ' degrees out.\n' + 'There is ' + response.body.currently.precipProbability + '% chances of Rain.')
//     } 
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



forecast(77.59796, 12.96991, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('bangalore', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})