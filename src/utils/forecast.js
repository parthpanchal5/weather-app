const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url =
		'https://api.darksky.net/forecast/7d0f876a7b3dde4d0399da2a1d3e7dd3/' + latitude + ',' + longitude + '?units=auto';
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			callback("Unable to Connect to Weather Service", undefined);
		} else if (body.error) {
			callback("Unable to Find Location", undefined);
		} else {
			callback(undefined ,
				"It is " + body.daily.data[0].summary + " Cloud Cover of "+ body.currently.cloudCover +" \nIt is currently " + body.currently.temperature + " degrees out & humidity of "+ body.currently.humidity +", \nThere is a " +body.currently.precipProbability + "% chance of rain in " + body.timezone,
			);
		}
	});
};

module.exports = forecast;
