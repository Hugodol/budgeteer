var Sequelize = require('Sequelize');
var db = new Sequelize('budget', 'root', '260354hd', {
  host: 'localhost',
  dialect: 'mysql'
});

// Create table
var Expense = db.define('Expense' , {
  gas: Sequelize.STRING,
  food: Sequelize.STRING,
  other: Sequelize.STRING
});

Expense.sync();

module.exports = Expense;