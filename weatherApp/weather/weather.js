const request = require("request");
const key = "9c3247ea0d1596ad3ea7d8ea5c3d648f";

var getWeather = (lat, lng, callback) => {
    request({
            url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
            json: true
    }, (error, res, body) => {
        if(!error && res.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature});
        } else {
            callback("Unable to fetch weather");
    }    
});
};

module.exports.getWeather = getWeather;
