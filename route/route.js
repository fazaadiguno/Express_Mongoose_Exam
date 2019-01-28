//jshint esversion:6

const router = require("express").Router();
const mongoose = require("mongoose");
const os = require("os");
const cpuData = require("../models/cpudata");


mongoose.connect('mongodb://localhost:27017/cpudata',
{ useNewUrlParser: true }, () => {
    console.log('Connected with mongoDB');
});

router.post("/data", (req, res) => {
    new cpuData({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((x) => {
        console.log(x);
        console.log("cpuData uploaded");
        res.send("Successfully posted!");
    });
});


router.get("/data", (req, res) => {
    cpuData.find((err, data) => {
        if (err) {
            throw err;
        }
        else {
            console.log(data);
            res.send(data);
        }
    });
});


module.exports = router;
