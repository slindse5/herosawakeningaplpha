const express = require('express');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 8080;
const routes = require('./routes/api')
const URI = process.env.MONGO_URI || "mongodb+srv://mindwack:Tekka2021%21@cluster0.s0nic.mongodb.net/leaderboard";
const client = new MongoClient(URI);
const db = client.db("leaderboard");
require("dotenv").config();


//connect to DB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//check for connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


// Data parsing
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Merge Public and Build folders
if (process.env.NODE_ENV === 'production') {
    const public = path.join(__dirname, '/../heroapp/public');
    const images = path.join(public, 'Images');
    const videos = path.join(public, 'Videos');
    const audio = path.join(public, 'Audio');
    const fonts = path.join(public, 'Fonts');
    const build = path.join(__dirname, '/../heroapp/build');

    app.use('/Images', express.static(images));
    app.use('/Videos', express.static(videos));
    app.use('/Audio', express.static(audio));
    app.use('/Fonts', express.static(fonts));
    app.use(express.static(public));
    app.use(express.static(build));

    //Use Build Index.html for root page
    app.get('/', function (req, res) {
        res.sendFile(path.join(build, 'index.html'));
    });
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
