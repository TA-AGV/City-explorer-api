const errorHandler = (error,res)=>{
    console.log(error);
    res.status(500).send('something went wrong');
};

module.exports=errorHandler;