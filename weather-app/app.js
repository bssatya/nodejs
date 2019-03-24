const request = require('request')

const url = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/37.8267,-122.4233?unit=auto&exclude=[minutely, hourly, alerts, flags]'

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service')
    } else if (response.body.error) {
        console.log('unable to find the location')
    } else {
        console.log(response.body.currently)
        console.log(response.body.daily.data[0].summary)
        console.log('Its currnetly '+ response.body.currently.temperature + ' degrees out.\n' + 'There is ' + response.body.currently.precipProbability + '% chances of Rain.')
    } 
})

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0eWFrdW1hciIsImEiOiJjanRta3MwbHUwNDN0NDNvNWFnbW82bzcyIn0.MPO_epfIzGgWzZYd92LNcQ'

request({url: geoCodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect to the weather service')
    } else if (response.body.features.length === 0) {
        console.log('unable to fetch the location for the search query')
    } else {
        console.log(response.body.features[0].center)
    }
})