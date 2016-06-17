///<referance path="./typings/tsd.d.ts"/>

import express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    console.log("Default Request");
})

export = router;