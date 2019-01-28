//jshint esversion:6
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cpudataSchema = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
});

let cpudata = mongoose.model('data', cpudataSchema);

module.exports = cpudata;
