const request = require('request')

const url = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.currently)
    console.log('Its currnetly '+ response.body.currently.temperature + ' degrees out.\n' + 'There is ' + response.body.currently.precipProbability + '% chances of Rain.')
})