require("dotenv").config();

//requirements for npms
var fs = require("fs");
var Twitter = require('twitter');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require('request');

// console.log(keys);

//allows acces to key info
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//take user input as process.argv
var input = process.argv;
//making asking = to what the user has inputed after node liri.js XXXXX
var asking = input[2];

var name = "";

for (i = 3; i < input.length; i++) {
	name = name + " " + input[i];
}

name = name.trim().replace(" ", "+");

if (asking === "my-tweets") {
	    		
	var params = {screen_name: 'Astaire Bear', limit: 20};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	console.log(response, null, 2);
	    for (var i = tweets.length - 1; i >= 0; i--) {
	    	var myTweets = 
	    		"+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n" + "\n" +
	    		"Tweet Number: " + (tweets.length-i) + "\n" +
	    		"Posted on: " + tweets[i].created_at + "\n" +
	    		"Tweet Posted: " + tweets[i].text + "\n" + "\n" + "+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-="
	    	console.log(myTweets);
	    	writeToLog(myTweets);
			} 
		}
	})
}

function writeToLog(printInfo) {
	fs.appendFile("log.txt", printInfo, function(err) {
		if (err) {
			return console.log(err);
		}

	});

}

if (asking === "spotify-this-song") {
	if (name === "") {
  		name = "The Sign"
  	}

  spotify.search({ type: 'track', query: name, limit: 6 }, function(err, data) {
 	if (err) {
    	return console.log('Error occurred: ' + err);
  	}
  	

  	var track = data.tracks.items[5];
		"+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n" +
		console.log("Song Title: " + name + "\n") +
		console.log("Artist: " + track.artists[0].name) + "\n" +
		console.log("Album: " + track.album.name + "\n") + 
		console.log("Preview Link: " + track.preview_url) + "\n" +
		"+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n"

	})

}

else if (asking === "movie-this") {
    if (name === "") {
        name = "Mr. Nobody";
    }

   //  run a request to the OMDB API
   var queryUrl = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";

   request.get(queryUrl, function(error, response, body) {
       
         if (!error && response.statusCode === 200) {
             for (i = 0; i < JSON.parse(body).Ratings.length; i++) {
                 if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
                     tomatoesRating = JSON.parse(body).Ratings[i].Value;
                 }
                 if (JSON.parse(body).Ratings[i].Source === "Internet Movie Database") {
                     internetRating = JSON.parse(body).Ratings[i].Value;
                 }
             }
             "+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n" +
           console.log("Movie Title: " + JSON.parse(body).Title + "\n") +
           console.log("Year movie released: " + JSON.parse(body).Year + "\n") +
           console.log("Movie rating: " + JSON.parse(body).Rated + "\n") + 
           console.log("Rotten Tomatoes Rating: " + tomatoesRating + "\n") +
           console.log("Internet Movie Database Rating: " + internetRating + "\n") +
           console.log("Country: " + JSON.parse(body).Country + "\n") + 
           console.log("Language: " + JSON.parse(body).Language + "\n") + 
           console.log("Movie Plot: " + JSON.parse(body).Plot + "\n") +
            "+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n"


         }
   });

}
if (asking === "do-what-it-says") {
	//Take text inside of random.txt and then use it to call one of LIRI's commands.

	fs.readFile("random.txt", "utf8", function(error, data) {

		if (error) {
			return console.log(error);
		}

		var randomRead = data.split(",");


		name = randomRead[1]
		// console.log(name);

		spotify.search({ type: 'track', query: name, limit: 1 }, function(err, data) {
			if (err) {
				return console.log('Error occurred: ' + err);
			}

			var track = data.tracks.items[0];
				"+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n" +
				console.log("Song Title: " + name + "\n") +
				console.log("Artist: " + track.artists[0].name + "\n") +
				console.log("Album: " + track.album.name + "\n") + 
				console.log("Preview Link: " + track.preview_url + "\n") +
				"+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=+-=" + "\n"

		})

	});
}