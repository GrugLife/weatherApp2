const request = require("request");
const key = "Your api key here";

var getWeather = (lat, lng, callback) => {
    request({
            url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
            json: true
    }, (error, res, body) => {
        if(!error && res.statusCode === 200) {
            callback(undefined, {
                summary: body.currently.summary,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                daily: body.daily.summary
            });
        } else {
            callback("Unable to fetch weather");
    }    
});
};

module.exports.getWeather = getWeather;
