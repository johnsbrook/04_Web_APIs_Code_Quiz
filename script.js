var quizPage = document.querySelector("#quizPage");
var welcome = document.querySelector("#welcome");
var codeQuiz = document.querySelector("#codeQuiz");
var intro = document.querySelector("#intro");
var introParagraph = document.querySelector("#introParagraph");
var goodLuck = document.querySelector("#goodLuck");
var countdown = document.querySelector("#countdown");
var score = document.querySelector('#score');

// Sets initial value for user's game score. 
var gameScore = 0;
    score.textContent = gameScore;

// Sets initial variable for the user to record score. 
var finalScore = document.querySelector("#finalScore");


// Creates function to click and start countdown and quiz
var startQuiz = document.querySelector("#startQuiz");
    startQuiz = startQuiz.addEventListener("click", function() {

        timerCountdown();
        question1();

    });


// Sets countdown from 60 to 0 seconds and sends to gameOver() function
var secondsLeft = 30;
var timerCountdown;

function timerCountdown() {

        // secondsLeft = 30;    
        timerCountdown = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;

        if(secondsLeft < 1) {
            clearInterval(timerCountdown);
            countdown.textContent = 0;
            gameOver();
            enterScore();
            stopTimer();
        }
    }, 1000);
}

// Creates the first question
function question1() {

    // Erases quizPage and finalScore to avoid overlapping
    quizPage.textContent = "";
    finalScore.textContent = "";

    // Creates div element titled "row 1", establishes class and ID, and appends it to ID element #quizPage
    $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
    $("#row1").append('<h1>What does the acronym HTML stands for?</h1>');
    $('#row1').append('<button id="question1Answer1" class="wrongAnswer question1a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> a) Hypertext Markup Link</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question1Answer2" class="correctAnswer question1a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> b) Hypertext Markup Language</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question1Answer3" class="wrongAnswer question1a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> c) Hypermarkup Language</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question1Answer4" class="wrongAnswer question1a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> d) Hypermarkup Text Language</button>');

    if ($(".wrongAnswer")) {
        $('.wrongAnswer').click(function(){
            secondsLeft -=10;
            question2();
        })
    }

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 300;
            score.textContent = gameScore;
            question2();
        })
    }
   
}

// Creates the second question
function question2() {

    // Erases quizPage and finalScore to avoid overlapping
    quizPage.textContent = "";
    finalScore.textContent = "";

    // Creates div element titled "row 1", establishes class and ID, and appends it to ID element #quizPage
    $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
    $("#row1").append('<h1>What\'s a CDN?</h1>');
    $('#row1').append('<button id="question2Answer1" class="wrongAnswer question2a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> a) Content Display Network</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question2Answer2" class="wrongAnswer question2a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> b) Content Discretionary Network</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question2Answer3" class="wrongAnswer question2a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> c) Content Depository Network</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question2Answer4" class="correctAnswer question2a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> d) Content Delivery Network</button>');

    if ($(".wrongAnswer")) {
        $('.wrongAnswer').click(function(){
            secondsLeft -=10;
            question3();
        })
    }

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 600;
            score.textContent = gameScore;
            question3();
        })
    }
   
}

// Creates the third question
function question3() {

    // Erases quizPage and finalScore to avoid overlapping
    quizPage.textContent = "";
    finalScore.textContent = "";

    // Creates div element titled "row 1", establishes class and ID, and appends it to ID element #quizPage
    $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
    $("#row1").append('<h1>What do you use to link a stylesheet?</h1>');
    $('#row1').append('<button id="question3Answer1" class="wrongAnswer question3a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> a) link type="" href=""</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question3Answer2" class="wrongAnswer question3a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> b) link rel="" src=""</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question3Answer3" class="correctAnswer question3a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> c) link rel="" href=""</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question3Answer4" class="wrongAnswer question3a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> d) link type="" src=""</button>');

    if ($(".wrongAnswer")) {
        $('.wrongAnswer').click(function(){
            secondsLeft -=10;
            question4();
        })
    }

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            score.textContent = gameScore;
            question4();
        })
    }
   
}

// Creates the fourth question
function question4() {

    // Erases quizPage and finalScore to avoid overlapping
    quizPage.textContent = "";
    finalScore.textContent = "";

    // Creates div element titled "row 1", establishes class and ID, and appends it to ID element #quizPage
    $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
    $("#row1").append('<h1>What is the symbol to define class?</h1>');
    $('#row1').append('<button id="question4Answer1" class="wrongAnswer question4a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> a) # (pound or number sign)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question4Answer2" class="correctAnswer question4a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> b) . (period)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question4Answer3" class="wrongAnswer question4a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> c) { } (curly brackets)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question4Answer4" class="wrongAnswer question4a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> d) [ ] (brackets)</button>');

    if ($(".wrongAnswer")) {
        $('.wrongAnswer').click(function(){
            secondsLeft -=10;
            question5();
        })
    }

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            score.textContent = gameScore;
            question5();
        })
    }
   
}

// Creates the fifth question
function question5() {

    // Erases quizPage and finalScore to avoid overlapping
    quizPage.textContent = "";
    finalScore.textContent = "";

    // Creates div element titled "row 1", establishes class and ID, and appends it to ID element #quizPage
    $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
    $("#row1").append('<h1>Which type of file you need to create to customize a page\'s style?</h1>');
    $('#row1').append('<button id="question5Answer1" class="wrongAnswer question5a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> a) Class Style Sheet (.css)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question5Answer2" class="wrongAnswer question5a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> b) Cascading Style File (.css)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question5Answer3" class="wrongAnswer question5a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> c) Classifying Stylesheet (.css)</button>');
    $('#row1').append('<br>');
    $('#row1').append('<button id="question5Answer4" class="correctAnswer question5a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left"> d) Cascading Style Sheets (.css)</button>');

    if ($(".wrongAnswer")) {
        $('.wrongAnswer').click(function(){
            secondsLeft -=10;
            if (secondsLeft < 1) {
                gameOver(); 
                enterScore();
                stopTimer(); 
            } else { 
                youWin();
                enterScore();
                stopTimer();
              };  
        })
    }

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            score.textContent = gameScore;
            enterScore();
            stopTimer();   
        })
    }   
}

// Creates the youWin() function
function youWin() {

    quizPage.textContent = "";
   
    var youWin = document.createElement("img");
        youWin.setAttribute("class", "col-sm-10 mx-auto youWin");
        youWin.setAttribute("id", "youWin");
        youWin.setAttribute("src", "youwin.gif");
        youWin.setAttribute("alt", "Bravo, You WIN!");
        youWin.setAttribute("style", "height: 500px; width: auto;")
        quizPage.appendChild(youWin);
    };

// Displays Game Over when user doesn't successfully answer questions
function gameOver() {

    quizPage.textContent = "";
    var gameOver = document.createElement("img");
        gameOver.setAttribute("class", "col-sm-10 mx-auto gameOver");
        gameOver.setAttribute("id", "gameOver");
        gameOver.setAttribute("src", "game-over.gif");
        gameOver.setAttribute("alt", "Game Over");
        gameOver.setAttribute("style", "height: 500px; width: auto;")
        quizPage.appendChild(gameOver);
  
}

// stopTimer();

function enterScore() {
    // var finalScore = document.querySelector("#finalScore");
    
    var createScore = document.createElement("div");
        createScore.setAttribute("class", "col-sm-10 mx-auto");
        createScore.setAttribute("id", "createScore");        
        createScore.textContent = "Your final score is: " + score.textContent;
        finalScore.appendChild(createScore);
        console.log(createScore);
  
    promptScore();
}

// Stops Timer if user finishes game
function stopTimer() {
    countdown.textContent = "CODING RULES!";
    countdown.setAttribute("style", "color: red; font-weight: bold;");
    clearInterval(timerCountdown); 
}


function promptScore() {
    var promptScore = prompt("Enter your name: ")
        storedScore = promptScore + ", your score is " + score.textContent +  "!";
        localStorage.setItem("storedScored", JSON.stringify(storedScore));
        console.log(storedScore);
}
