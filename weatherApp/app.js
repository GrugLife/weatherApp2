const yargs = require("yargs");

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


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
    
geocode.geocodeAddress(argv.address, (err, results) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(JSON.stringify(results.address, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (err, weatherResults) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Currently at ${results.address}, it's ${weatherResults.summary}`);
                console.log(`with a temperature of ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`);
                console.log(`${weatherResults.daily}`);
             }
        });
    }
});





