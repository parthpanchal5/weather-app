const request = require('request')


const geocode = (address, callback) => {
  const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGFydGg1IiwiYSI6ImNqdXZtOTd6MTAydnY0ZW9oODlub2Y4NTMifQ.xg3XEf2Sq4KzQ8vAfOxDVw'

  request({ url, json: true }, (err, { body }) => {
    if(err) {
      callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location, Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode