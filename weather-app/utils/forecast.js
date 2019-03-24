request = require('request')

const forecast = (lat, long, callback) => {
    const forecastUrl = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?unit=auto&exclude=[minutely, hourly, alerts, flags]'
    
    request({url: forecastUrl, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to forecast service')
        } else if (response.body.error) {
            callback('unable to find the location')
        } else {
            const summary = response.body.daily.data[0].summary + ' Its currnetly '+ response.body.currently.temperature + ' degrees out.' + 'There is ' + response.body.currently.precipProbability + '% chances of Rain.'
            callback(undefined, {
                summary: summary 
            })
        }
    })
}

module.exports = forecast