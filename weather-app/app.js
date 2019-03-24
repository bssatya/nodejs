const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('hubli', (error, data) => {
    if (error) {
        return console.log('error', error)
    }
    
    forecast(data.latitude, data.longitude, (error, data) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log('Summary: ', data.summary)
    })
})