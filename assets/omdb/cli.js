
var TV = require("./tv.js")
var fs = require("fs");

var search = process.argv[2];
var term = process.argv.slice(3).join('+');

console.log(term);
// console.log(tv)
// console.log(fs)

var newTv = new TV;

// newTv.findShow(term);
newTv.findActor(term);




