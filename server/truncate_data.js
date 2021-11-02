
const Affirmation = require('./model/affirmation');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/affirmation_database', { useNewUrlParser: true, useUnifiedTopology: true })

Affirmation.deleteMany({}, () => {
    console.log(`Finished truncating affirmation database.`);
    console.log('Press Ctrl+C to exit.')
})