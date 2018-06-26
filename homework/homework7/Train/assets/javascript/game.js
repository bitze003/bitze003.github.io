
  // Initialize Firebase
  $( document ).ready(function() {
    var config = {
        apiKey: "AIzaSyAyZmNwik2PpeGadjJRfxAN5oedhH2Ik8A",
        authDomain: "trains-6845e.firebaseapp.com",
        databaseURL: "https://trains-6845e.firebaseio.com",
        projectId: "trains-6845e",
        storageBucket: "trains-6845e.appspot.com",
        messagingSenderId: "814268585309"
      };
      firebase.initializeApp(config);

    var database = firebase.database();

    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var trainTime = $("#trainTime").val();
        var frequency = $("#frequency").val();
        
      
console.log(trainName);
console.log(destination);
console.log(trainTime);
console.log(frequency);


        database.ref().push({
            train: trainName,
            destinations: destination,
            firstTrain: trainTime,
            frequencys: frequency,
            
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
        $("input").val("");
    })
    database.ref().on("child_added", function (snapshot) {
        trainTime = snapshot.val().firstTrain;
        frequencys = snapshot.val().frequencys
        console.log(trainTime);
        var diffTime = moment().diff(moment(trainTime,"HH:mm"), "minutes");
		var timeRemainder = moment().diff(moment(trainTime, "HH:mm"), "minutes") % frequencys ;
        var minutes = (frequencys - timeRemainder);
        var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");
        console.log(diffTime);
        console.log(timeRemainder);
        console.log(minutes);
        console.log(nextTrainArrival);

        $("tbody").append('<tr>');
        $("tbody").append('<td>' + snapshot.val().train + '</td>');
        $("tbody").append('<td>' + snapshot.val().destinations + '</td>');
        $("tbody").append('<td>' + snapshot.val().frequencys + '</td>');
        $("tbody").append('<td>' + nextTrainArrival + '</td>');
        $("tbody").append('<td>' + minutes + '</td>');
        $("tbody").append('</tr>');
		
    })
})
