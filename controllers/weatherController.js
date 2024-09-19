const axios = require('axios');
const {WEATHER_API_KEY}=process.env;
const errorHandler=require('../utils/errorHandler');


const handleWeather = async (req,res)=>{
    const {lat,lon}=req.query
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}&include=minutely`;

    try{
        const result=await axios.get(url);
        const resultArray=result.data.data.map(day=> new Forecast(day));
        console.log(`${resultArray}`)
        res.status(200).send(resultArray);
    }catch(error){
        errorHandler(error,res);
    }
};

function Forecast(day){
    this.date=day.datetime;
    this.description=day.weather.description;
    this.code_country=day.country_code;
}

module.exports={handleWeather};