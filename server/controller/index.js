var expenses = require('../db').expenses;
var users = require('../db').users;

module.exports = {
  // user ready
  get: function(req, res) {
    users.find({where: {name: req.params.name}})
      .then(function(user) {
        return expenses.find({where: {UserId: user.get('id')}})
      })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // user ready
  post: function(req, res) {
    users.find({where: {name: req.params.name}})
      .then(function(user) {
        expenses.create({
          gas: req.body.gas,
          food: req.body.food,
          other: req.body.other,
          UserId: user.get('id')
        })
      })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // user ready
  put: function(req, res) {
    users.find({where: {name: req.params.name}})
      .then(function(user) {
        expenses.update(
          req.body, {where: {UserId: user.get('id')}}
        )
      })
      .then(function() {
        res.sendStatus(202);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // user ready
  delete: function(req, res) {
    users.find({where: {name: req.params.name}})
      .then(function(user) {
        expenses.destroy({where: {UserId: user.get('id')}})
      })
      .then(function() {
        res.sendStatus(202);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // user ready
  // TODO: add functinality to make username unique
  postUser: function(req, res) {
    users.create({
      name: req.body.user
    })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}