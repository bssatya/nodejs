request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?unit=auto&exclude=[minutely, hourly, alerts, flags]'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to forecast service')
        } else if (body.error) {
            callback('unable to find the location')
        } else {
            const summary = body.daily.data[0].summary + ' Its currnetly '+ body.currently.temperature + ' degrees out.' + 'There is ' + body.currently.precipProbability + '% chances of Rain.'
            callback(undefined, {
                summary: summary 
            })
        }
    })
}

module.exports = forecast