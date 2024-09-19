const express=require('express');
const {handleWeather}=require('../controllers/weatherController');
const {handleMovie}=require('../controllers/movieController');

const router=express.Router();

router.get('/weather',handleWeather);
router.get('/movie',handleMovie);
router.use('*',(req,res)=> res.status(404).send('page not found'));

module.exports=router;