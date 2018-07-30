var inquirer = require('inquirer');
// var mysql  = require('mysql')

// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "Password",
//   database: "greatBay_DB"
// });

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);

// });


 var prompt = inquirer.prompt([
    {
        type: "input",
        message: "Do you want to bid or post",
        name: "userinput"
      }// ,
    //   {
    //     type: "confirm",
    //     message: "Are you sure:",
    //     name: "confirm",
    //     default: true
    //   }
  
]).then(function(answers) {
   if(answers.userinput === 'bid'){
       console.log("Okay");
   }

   
   else if(answers.userinput === 'post'){
        console.log("Not OK");
   }
});

// console.log(answers);