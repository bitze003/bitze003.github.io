//Setup
document.addEventListener("DOMContentLoaded", function(event){




var anatomyArray = [
    {
        word:"abdominal",
        image1: "assets/images/abdominal.jpg"
    },

    {
        word:"dorsal",
        image1:"assets/images/dorsal.png"
    },
    {
        word:"gluteal",
        image1:"assets/images/gluteal.png"
    },

   {
       word:"pedal",
       image1:"assets/images/pedal.png"
   },
   {
       word:"pelvic",
       image1:"assets/images/pelvic.jpg"
   },
   {
       word:"vertebral",
       image1:"assets/images/vertebral.jpg"
   },

]

var gameTime = false;

var randomNumber = Math.floor(Math.random() * anatomyArray.length);

var anatomy = anatomyArray[randomNumber].word;
var image1 = anatomyArray[randomNumber].image1

var remaining = anatomy.length;

var answerArray = [];


function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

function addCorrect()   {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

var alphabetArray =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


function letterCheck(guess) {
    if (alphabetArray.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}
document.addEventListener("keydown", function(event){
    if(gameTime) {
        letterCheck(event);
    } else {
        init();
    }
});

function displayWins() {
    var winsDisplay = document.get("#winsDisplay");
    winsDisplay.textContent = winScore;
    console.log(winScore);
}

var winScore = 0;

function correctGuessCheck(guess) {
    console.log(guess);

    var isCorrect = anatomy.indexOf(guess.key);

    if (isCorrect > -1) {
        correctGuess(guess);
        answerArray[isCorrect] = guess.key;
        console.log(answerArray)
    } else {
        incorrectGuess(guess);
    }
}



function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}



function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) > 0) {
        console.log(guess);
            addCorrectLetter(guess);
    }
}


function addCorrectLetter(guess){
        for (var a=0; a < anatomy.length; a++){
        if (guess.key === anatomy[a]) {
            answerArray[a] = guess.key.toUpperCase();
            displayCurrentWord();
            lettersRemaining --;
            if (lettersRemaining === 0); {
                winScore++;
                display();
                changeImage();
                addCorrect();
                displayCurrentWord();
            }
        }
    }
}

var incorrectGuessesMade = [];
var guessesLeft = 6;


function incorrectGuess(guess) {
    if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
        addIncorrectLetter(guess);
    }
}

function changeImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = image1;
    gameStatus = false;
}

function addIncorrectLetter(guess) {
    incorrectGuessesMade.push(guess.key.toUpperCase());
    displayGuessesMade();
    if (guessesLeft >= 1 ){
    guessesLeft--;}
    displayGuessesLeft();
    if (guessesLeft === 0) {
        changeImage();
        
        displayAnswer();

        // init();

        setTimeout(init, 3000);
    }
}





function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}




function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = image1;
    console.log(image1);
}

function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = anatomy.toUpperCase();
}



function init() {
    gameTime = true;
    randomNumber = Math.floor(Math.random() * anatomyArray.length);
    anatomy = anatomyArray[randomNumber].word;
    image1 = anatomyArray[randomNumber].image1
    lettersRemaining = anatomy.length;
    answerArray = []; 
    for (var i = 0; i < anatomy.length; i++) {
        if (anatomy[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {  answerArray[i] = "_";
    }
}

lettersRemaining = anatomy.length;
guessesLeft = 6;
displayGuessesLeft()
incorrectGuessesMade = [];
displayGuessesMade()
displayImage();
displayCurrentWord();
revealedAnswerDisplay.textContent = "";
removeCorrect();

}
});
