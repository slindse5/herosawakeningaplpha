const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Affirmation = require('../model/affirmation');

router.get('/', (req, res, _) => {
    Affirmation.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
});

router.post('/', (req, res, _) => {
    const affirmation = new Affirmation({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        title: req.body.title,
        thumbnail_src: req.body.thumbnail_src,
        portrait_src: req.body.portrait_src,
        video_src: req.body.video_src,
        birthsign_src: req.body.birthsign_src,
        preview_src: req.body.preview_src,
        quotes: req.body.quotes
    });

    affirmation.save().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({error: err});
    });

})

router.get('/:affirmationId', (req, res, _) => {
    const id = req.params.affirmationId;
    Affirmation.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: "Affirmation not found."})
            }
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
});


router.delete('/:affirmationId', (req, res, _) => {
    const id = req.params.affirmationId;
    Affirmation.remove({_id: id})
        .exec()
        .then(res => {
            if (res) {
                res.status(200).json(res);
            } else {
                res.status(404).json({message: "Affirmation not found."})
            }
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
})

module.exports = router;