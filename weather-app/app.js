const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('bangalore', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})

forecast(77.59796, 12.96991, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})