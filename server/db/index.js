var Sequelize = require('Sequelize');
if (process.env.DATABASE_URL) {
  var db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: match[4],
    host: match[3],
    logging: true
  });
} else {
  var db = new Sequelize('budget', 'root', '260354hd', {
    host: 'localhost',
    dialect: 'mysql'
  });
}

// Create table
var Expense = db.define('Expense' , {
  gas: Sequelize.STRING,
  food: Sequelize.STRING,
  other: Sequelize.STRING
});

Expense.sync();

module.exports = Expense;