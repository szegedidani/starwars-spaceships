const Starwars = require('../models/starwars');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  list: (req, res) => {
    Starwars.find({}, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.send(post);
    });
  },

  find: (req, res) => {
    // TODO: find a spacehip
    Starwars.findById(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.send(post);
    });
  },

  create: (req, res) => {
    // TODO: create spacehip
    Starwars.create(req.body, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  },

  update: (req, res) => {
    // TODO: update a spacehip
    Starwars.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  },

  remove: (req, res) => {
    // TODO: delete spacehip
    Starwars.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  },
};
