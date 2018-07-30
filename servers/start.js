var http = require("http");

var PORT1 = 8081

function handleRequest (request, response) {
    response.end("It works" + request.url)
}
    var serverOne = http.createServer(handleRequest)
    

    serverOne.listen(PORT1, function() {
        console.log("server is listening on http://localhost:" + PORT1)
    });


// var PORT2 = 8082

// function handleSecondRequest (request, response) {
//     response.end("It works and this too" + request.url)
// }
//     var serverTwo = http.createServer(handleSecondRequest)
    

//     serverTwo.listen(PORT2, function() {
//         console.log("i'm server is listening on http://localhost:" + PORT2)
//     });

// var PORT3 = 8083

// function handleThirdRequest (request, response) {
//     response.end("It works and this too" + request.url)
// }
//     var serverThree = http.createServer(handleThirdRequest)
    

//     serverThree.listen(PORT3, function() {
//         console.log("i'm server is listening on http://localhost:" + PORT3)
//     });

//     var PORT4 = 8084

// function handleFourthRequest (request, response) {
//     response.end("It works and this too" + request.url)
// }
//     var serverFour = http.createServer(handleFourthRequest)
    

//     serverFour.listen(PORT4, function() {
//         console.log("i'm server is listening on http://localhost:" + PORT4)
//     });