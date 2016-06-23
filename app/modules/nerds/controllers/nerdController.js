'use strict';

var Nerd = require('../models/nerdModel');

exports.get = function(req, res) {
  Nerd.find(function(err, nerds) {
    if(err) {
      res.send(err);
    }
    res.json(nerds);
  });
}

exports.put = function(req, res) {
  var newNerd =  new Nerd({
    name: req.body.name
  });

  newNerd.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.send(200);
  });
}

exports.update = function(req, res) {
  Nerd.findById(req.params.id, function(err, nerd) {
    if (err) {
      res.send(err);
    }

    nerd.name = req.body.name;

    nerd.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.send(200);
    });
  });
}

exports.delete = function(req, res) {
  Nerd.findById(req.params.id, function(err, nerd) {
    if (err) {
      res.send(err);
    }

    nerd.remove(function(err) {
      if (err) {
        res.send(err);
      }
      res.send(200);
    });
  });
}