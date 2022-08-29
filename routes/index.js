const router = require('express').Router();
// const express = require('express');
// const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('index',{
        javascriptkey:process.env.javascriptkey
    });

});

module.exports = router;
