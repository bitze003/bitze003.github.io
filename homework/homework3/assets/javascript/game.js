//Setup
var correctimage = "";
var correctword = "";
var anatomyArray = [
    {
        word:"abdominal",
        image1: "assets/images/abdominal.jpg"
    },

    {
        word:"cephalic",
        image1:"assets/images/cephalic.jpg"
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
        word:"lumbar",
        image1:"assets/image/lumbar.png"
    },
    {
        word:"orbital",
        image1:"assets/image/orbital.png"
    },
    {
        word:"palmar",
        image1:"assets/image/palmar.jpg"
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

var gameTime = true;

var randomNumber = Math.floor(Math.random() * anatomyArray.length);

var anatomy = anatomyArray[randomNumber].word;
var image1 = anatomyArray[randomNumber].image1

var remaining = anatomy.length;

var answerArray = [];



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
        var winScore = 0;
        function correctGuessCheck(guess) {
            if (anatomy.indexOf(guess.Key) > -1) {
                correctGuess(guess);
            } else {
                incorrectGuess(guess);
            }
        }

function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
            addCorrectLetter(guess);
    }
}

function addCorrectLetter(guess) {  
    for (var a=0; a < anatomy.length; a++){
        if (guess.key === anatomy[a]) {
            answerArray[a] = guess.key.toUpperCase();
            displayCurrentWord();
            lettersRemaining --;
            if (lettersRemaining === 0) {
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

function addIncorrectLetter(guess) {
    incorrectGuessesMade.push(guess.key.toUpperCase());
    displayGuessesMade();
    guessesLeft--;
    displayGuessesLeft();
    if (guessesLeft === 0) {
        changeImage();
        displayAnswer();
    }
}


function displayWins() {
    var winsDisplay = document.querySelector("#winsDisplay");
    winsDisplay.textContent = winScore;
}

function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}

function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = correctimage;
}

function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = anatomy.toUpperCase();
}

function addCorrect()   {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}

function init() {
    gameTime = true;
    randomNumber = Math.floor(Math.random() * anatomyArray.length);
    correctword = anatomyArray[randomNumber].word;
    correctimage = anatomyArray[randomNumber].image1
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


displayImage(anatomyArray[0]);

displayCurrentWord();

revealedAnswerDisplay.textContent = "";



removeCorrect();

}