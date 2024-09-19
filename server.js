require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes=require('./routes');

const weather = require('./data/weather.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
app.use(routes);
// const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
// const TMDB_API_KEY=process.env.TMDB_API_KEY;

// app.get('/weather', handleWeather);
// app.get('/movie',handleMovie);
// app.use('*', (request, response) => response.status(404).send('page not found'));
//===============================================
// servidor que toma dato de un .json
//================================================
// function handleWeather(request,response){
//     let {searchQuery}=request.query;

//     const city= weather.find( c => c.city_name.toLowerCase() === searchQuery.toLowerCase());

//     try{
//         const weatherArray = city.data.map(day => new Forecast(day));
//         response.status(200).send(weatherArray);
//     }catch{
//         errorHandler(error,response);
//     }
// }
// function Forecast(day){
//     this.date=day.valid_date,
//     this.description=day.weather.description
// }
// async function handleWeather(request, response) {
//     let { lat, lon } = request.query;
//     console.log(`lat:${lat},lon:${lon}`);
//     const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}&include=minutely`
//     let resultado;
//     try {
//         resultado = await axios.get(url);
//         let resultadoArray = resultado.data.data.map(day => new Forecast(day));
//         response.status(200).send(resultadoArray);
//     }catch(error){
//         errorHandler(error,response);
//     }
// }
// function Forecast(day) {
//     this.date = day.datetime,
//     this.description = day.weather.description,
//     this.codeCountry=day.country_code
// }

// async function handleMovie(request,response){
//     let {country}=request.query;
//     console.log(`${country}`);
//     const url=`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=${country}&api_key=${TMDB_API_KEY}`
//     let answer;
//     try{
//         answer=await axios.get(url);
//         console.log(answer);
//       let answerArray=answer.data.results.map(movie => new ForMovie(movie));
//         response.status(200).send(answerArray);
//     }catch(error){
//         errorHandler(error,response);
//     }
// }
// function ForMovie(movie){
//     this.title=movie.original_tittle,
//     this.overview=movie.overview,
//     this.image="https://image.tmdb.org/t/p/w500"+ movie.poster_path
// }
// function errorHandler(error, response) {
//     console.log(error);
//     response.status(500).send('something went wrong');
// }
app.listen(PORT, () => console.log(`listenting on ${PORT}`));