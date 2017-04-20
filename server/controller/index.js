var db = require('../db');

module.exports = {
  get: function(req, res) {
    db.findAll()
      .then(function(results) {
        res.json(results);
      });
      // add catch
  },
  post: function(req, res) {
    db.create({
      gas: req.body.gas,
      food: req.body.food,
      other: req.body.other,
    })
    .then(function() {
      res.sendStatus(201);
    });
      // add catch
  },
  put: function(req, res) {
    db.update(
      req.body
    , {where: {id:{$ne: null}}})
    .then(function() {
      res.json('successfully updated');
    });
      // add catch
  },
  delete: function(req, res) {
    db.destroy({truncate: {db}})
      .then(function() {
        res.json('table cleared');
      });
      // add catch
  }
}
