var request = require('request')
var fs = require("fs");


var TV = function () {
    this.findShow = function (show) {
        // The following URL can be used to search the TV Maze API for a given show
      var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        request(URL, function (error, response, body) {
            if (error) {
              console.log(error);
            }
            else {
              console.log(JSON.parse(body).name)
              console.log(JSON.parse(body).genres)
              console.log(JSON.parse(body).rating)
              console.log(JSON.parse(body).network.name)
              console.log(JSON.parse(body).summary)
            }
           
        })
      }
      this.findActor = function (actor) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;
        request(URL, function (error, response, body) {
            if (error) {
              console.log(error);
            }
            else {
              console.log(JSON.parse(body))
              // console.log(JSON.parse(body[0]).person.birthday)
              // console.log(JSON.parse(body).person.gender)
              // console.log(JSON.parse(body).person.country)
            }
           
        })
      }
    }

      module.exports = TV;