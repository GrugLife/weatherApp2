const request = require("request");
const key = "Your darksky key here";

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
