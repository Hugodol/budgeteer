var db = require('../db');

module.exports = {
  get: function(req, res) {
    db.findAll()
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  post: function(req, res) {
    db.create({
      gas: req.body.gas,
      food: req.body.food,
      other: req.body.other,
    })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  put: function(req, res) {
    db.update(
      req.body, {where: {id:{$ne: null}}})
      .then(function() {
        res.sendStatus(202);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  delete: function(req, res) {
    db.destroy({truncate: {db}})
      .then(function() {
        res.sendStatus(202);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
