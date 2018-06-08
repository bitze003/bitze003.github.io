//gives variables and assigns numbers
$(document).ready(function () {

    var green = Math.floor(Math.random() * 12 + 1);
    console.log(green);

    var blue = Math.floor(Math.random() * 12 + 1);
    console.log(blue);

    var red = Math.floor(Math.random() * 12 + 1);
    console.log(red);

    var purple = Math.floor(Math.random() * 12 + 1);
    console.log(purple);

    //The total to add to to win the game
    var addToo = Math.floor(Math.random() * 102 + 19);
    console.log(addToo);

    $('#randomnumber').text(addToo);
    console.log(addToo)

    // win vs loss

    var win = 0;
    var loss = 0;

    //the sum of your clicks
    var yourTotal = 0;

    // win loss conditions
    function checkWin() {
        if (yourTotal === addToo) {
            win++;
            $('#wins').html('Wins ' + win);
            reset();


        } else if (yourTotal > addToo) {
            loss++;
            $('#losses').html('Losses ' + loss);
            reset();
        }
    }

    $("#green").on("click", function () {
        yourTotal = yourTotal + green;
        $("#yourscore").html(yourTotal);
        console.log(yourTotal);
        checkWin();
    })

    $("#blue").on("click", function () {
        yourTotal = yourTotal + blue;
        $("#yourscore").html(yourTotal);
        console.log(yourTotal);
        checkWin();
    })
    
    $("#red").on("click", function () {
        yourTotal = yourTotal + red;
        $("#yourscore").html(yourTotal);
        console.log(yourTotal);
        checkWin();
    })
    $("#purple").on("click", function () {
        yourTotal = yourTotal + purple;
        $("#yourscore").html(yourTotal);
        console.log(yourTotal);
        checkWin();
    })

    function reset() {
        addToo = Math.floor(Math.random() * 102 + 19);
        console.log(addToo)
        $('#randomnumber').text(addToo);
        green = Math.floor(Math.random() * 12 + 1);
        blue = Math.floor(Math.random() * 12 + 1);
        red = Math.floor(Math.random() * 12 + 1);
        purple = Math.floor(Math.random() * 12 + 1);
        yourTotal = 0;

        $('#yourscore').text(yourTotal);
    }



});
