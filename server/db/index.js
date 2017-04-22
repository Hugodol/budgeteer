var Sequelize = require('sequelize');
if (process.env.DATABASE_URL) {
  var db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres'
  });
} else {
  var db = new Sequelize('budget', 'root', '260354hd', {
    host: 'localhost',
    dialect: 'mysql'
  });
}

// Create table
var User = db.define('User', {
  name: Sequelize.STRING,
});

var Expense = db.define('Expense' , {
  gas: Sequelize.STRING,
  food: Sequelize.STRING,
  other: Sequelize.STRING
});

Expense.belongsTo(User);

Expense.sync();
User.sync();

// module.exports = Expense;
// module.exports = User;
module.exports = {
  expenses: Expense,
  users: User
}
