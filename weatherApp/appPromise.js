const yargs = require("yargs");
const axios = require("axios");
const key = "9c3247ea0d1596ad3ea7d8ea5c3d648f";
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodedAddress;

axios.get(geocodeUrl).then((res) => {
    if(res.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }

    var lat = res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((res) => {
    var temp = res.data.currently.temperature;
    var apparentTemp = res.data.currently.apparentTemperature;
    console.log(`It's currently ${temp}.  It feels like ${apparentTemp}`);
}).catch((err) => {
    if(err.code === 'ENOTFOUND'){
        console.log("Unable to connect to API servers");
    } else {
        console.log(err.message);
    }
});


