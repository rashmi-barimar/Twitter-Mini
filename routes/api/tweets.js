const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Tweet.find().populate('user')
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Tweet.find({user: req.params.user_id}).populate('user')
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err =>
        res.status(404).json({ notweetsfound: 'No tweets found from that user' }
    )
  );
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Tweet.findById(req.params.id).populate('user')
    .then(tweet => res.json(tweet))
    .catch(err =>
        res.status(404).json({ notweetfound: 'No tweet found with that ID' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);
    console.log("req", req.body)

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
      text: req.body.text,
      user: req.user.id
    });

    newTweet.save().then(tweet => res.json(tweet));
  }
);

module.exports = router;
