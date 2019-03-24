const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

geocode('hubli', (error, geoCodeData) => {
    if (error) {
        return console.log('error', error)
    }
    
    forecast(geoCodeData.latitude, geoCodeData.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(chalk.bold('Location:') + geoCodeData.location)
        console.log(chalk.bold('Latitude:') + geoCodeData.latitude + chalk.bold(' Longitude:'), geoCodeData.longitude)
        console.log(chalk.bold('Forecast Summary: ') + forecastData.summary)
    })
})