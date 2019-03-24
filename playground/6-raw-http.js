const https = require('https')

const url = 'https://api.darksky.net/forecast/04a9b396fc36725460005c6ce1963a42/40,-75?unit=auto&exclude=[minutely, hourly, alerts, flags]'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data) 
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('error', error)
})

request.end()