const axios=require('axios');
const {TMDB_API_KEY}=process.env;
const errorHandler=require('../utils/errorHandler');

const handleMovie=async (req,res)=>{
    const {country}=req.query;
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=${country}&api_key=${TMDB_API_KEY}`;

    try {
        const result=await axios.get(url);
        const resultArray=result.data.results.map(movie => new ForMovie(movie));
        console.log(resultArray);
        res.status(200).send(resultArray);
    }catch{
        errorHandler(error,res);
    }
};

function ForMovie(movie){
    this.title=movie.original_title;
    this.overview=movie.overview;
    this.average_vote=movie.vote_average;
    this.total_votes=movie.vote_count;
    this.popularity=movie.popularity;
    this.released_on=movie.release_date;
    this.image_url="https://image.tmdb.org/t/p/w500"+ movie.poster_path;
}

module.exports={handleMovie};