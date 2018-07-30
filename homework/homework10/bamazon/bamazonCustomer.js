var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table')

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password",
  database: "bamazon_DB"
});


//connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!\n")
  connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log("Choose an item you would like to buy.\n")

    console.table(result);
    buyItem();

  });

});

function buyItem() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    inquirer
      .prompt([{
          name: "choice",
          type: "rawlist",

          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "What would you like to buy?"
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])


      .then(function (answer) {
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.choice) {
            chosenItem = res[i];
          }
        }

        if (chosenItem.stock_quantity > 0) {

          connection.query(
            "UPDATE products SET ? WHERE ? ", [{
                stock_quantity: (chosenItem.stock_quantity -= answer.amount)
              },
              {
                product_name: answer.choice
              }
            ]

          )
          console.log("Your total is ", (chosenItem.price * answer.amount), "$")
          // console.table(res);

        } else
          console.log("Insufficient quantity!")
          connection.end();
      });
  });
};
