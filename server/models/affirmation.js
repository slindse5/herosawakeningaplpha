var mongoose = require('mongoose');

var affitmationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    title: String,
    thumbnail_src: String,
    birthsign_src: String,
    portrait_src: String,
    video_src: String,
    preview_src: String,
    quotes: mongoose.Schema.Types.Array
});

module.exports = mongoose.model('Affirmation', affitmationSchema);


