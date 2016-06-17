///<referance path="./typings/tsd.d.ts"/>
"use strict";
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    console.log("Default Request");
});
module.exports = router;
