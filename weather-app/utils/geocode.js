const request = require('request')

const geocode = (address, callback) => {
    const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2F0eWFrdW1hciIsImEiOiJjanRta3MwbHUwNDN0NDNvNWFnbW82bzcyIn0.MPO_epfIzGgWzZYd92LNcQ'

    request({url: geoCodeURL, json: true}, (error, response) => {
        if (error) {
            callback('unable to conect to the geocoe service')
        } else if (response.body.features.length === 0) {
            callback('unable to find location, try another serch')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode