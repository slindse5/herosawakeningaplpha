const express = require('express');
const ScorePost = require('../models/ScorePost');
const router = express.Router();
const Scores = require('../models/ScorePost');

//routes
router.get('/', (req, res) => {

    Scores.find().sort({score:-1}).limit(15)
        .exec()
        .then((scores) => {
            console.log("Scores: ", scores);
            res.json(scores);
            
        })
        .catch((error) => {
            console.log("Error: ", daerrorta);
        });
        
    });

router.post('/save', (req, res) => {
    const data = req.body;
    const newScore = new ScorePost(data);

    newScore.save((error) => {
        if (error) {
            res.status(500).json({msg: 'FIX IT!'});
            return;
        }
        return res.json({
        msg: "Data saved!!!!"
        });
    });
});

module.exports = router;