// var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password",
  database: "top_songs_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
//    fetchSongs();
//    getASong();
//    getSongsRange();
    getSongsLike();
  });

  function fetchSongs(){
      var query = connection.query(
          "SELECT * FROM Top5000;"
      , function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
  }

  function getASong(){
    var query = connection.query(
        "SELECT song FROM Top5000 WHERE artist = 'Kraftwerk';"
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
}

function getSongsRange(){
    var query = connection.query(
        "SELECT artist FROM Top5000 where rel_year BETWEEN 1964 AND 1979;"
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
}

function getSongsLike(){
    var query = connection.query(
        "SELECT song FROM Top5000 WHERE rel_year > 2000 AND song LIKE '%and';"
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
}