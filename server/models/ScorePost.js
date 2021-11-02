const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    level: Number,
    name: String,
    score: Number
});

//model
const ScorePost = mongoose.model('scores' , ScoreSchema);

module.exports = ScorePost;