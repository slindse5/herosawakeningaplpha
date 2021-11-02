
const Affirmation = require('./model/affirmation');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/affirmation_database', { useNewUrlParser: true, useUnifiedTopology: true })

const fs = require('fs');

let affirmations = JSON.parse(fs.readFileSync('data.json'));
affirmations = affirmations.map(affirmation => {
    return new Affirmation({
        _id: new mongoose.Types.ObjectId(),
        name: affirmation.name,
        title: affirmation.title,
        thumbnail_src: affirmation.thumbnail_src,
        portrait_src: affirmation.portrait_src,
        video_src: affirmation.video_src,
        birthsign_src: affirmation.birthsign_src,
        preview_src: affirmation.preview_src,
        quotes: affirmation.quotes
    })
})

insert_promises = affirmations.map(affirmation => {
    affirmation.save();
});

Promise.all(insert_promises).then(res => {
    console.log(`Finished inserting ${res.length} rows into database.`);
    console.log('Press Ctrl+C to exit.')
});


