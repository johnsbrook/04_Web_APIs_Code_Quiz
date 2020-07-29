var gameScore = 0;
    $("#score").text(gameScore);
var secondsLeft = 30;
var timerCountdown;    

$("#startQuiz").on("click",function() {
    timerCountdown(); 
    question1();                    });

function    timerCountdown() { 
    
            timerCountdown = setInterval(function() {
            secondsLeft--;
            $("#countdown").text(secondsLeft);       
            if(secondsLeft < 1) {
                clearInterval(timerCountdown);
                $("#countdown").text("0");
                    gameOver();
                    enterScore();
                    stopTimer();
            }}, 1000);}

function question1() {
     $("#quizPage").text("");
    $("#finalScore").text("");    
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
        })}

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 300;
            $("#score").text(gameScore);
            question2();
        })  }}

function question2() {
    $("#quizPage").text("");
    $("#finalScore").text("");
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
        })}

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 600;
            $("#score").text(gameScore);
            question3();
        })  }}

function question3() {
    $("#quizPage").text("");
    $("#finalScore").text("");
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
        })}

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            $("#score").text(gameScore);
            question4();
        })  }}

function question4() {
    $("#quizPage").text("");
    $("#finalScore").text("");
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
        })}

    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            $("#score").text(gameScore);
            question5();
        })  }}

function question5() {
    $("#quizPage").text("");
    $("#finalScore").text("");
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
            };      })      }
    if ($('.correctAnswer')) {
        $('.correctAnswer').click(function(){
            gameScore += 450;
            $("#score").text(gameScore);
            youWin();
            enterScore();
            stopTimer();   
        })      }}

function youWin() {
    $('#quizPage').text("");
    $('#quizPage').append('<img src="youwin.gif" alt="Bravo, You WIN!" id="youWin" class="col-sm-10 mx-auto youWin" style="height: 500px; width: auto;">');}

function gameOver() {
    $('#quizPage').text("");
    $('#quizPage').append('<img src="game-over.gif" alt="Game Over" id="gameOver" class="col-sm-10 mx-auto gameOver" style= "height: 500px; width: auto;">');}

function enterScore() {
    $('#quizPage').append('<div id="createScore" class="col-sm-10 mx-auto my-5 style="font-weight: ">' + "Your final score is: " + $("#score").text());
    promptScore();
}

function stopTimer() {
    $('#countdown').text('CODING RULES!');
    $('#countdown').attr('style', 'color: red; font-weight: bold;"');
    clearInterval(timerCountdown); 
}


var scorePlayerArray = [[],[]];
var promptPlayer = "";
var storedScore = "";

function promptScore() {

        promptPlayer = prompt("Enter your name: ");
        alert(promptPlayer + ", your score is " + $("#score").text() +  "!");
        storedScore = $("#score").text();

        var addPlayer = function(num) {
            scorePlayerArray[0].push(num);
        };
        var addScore = function(num) {
            scorePlayerArray[1].push(num);
        }
        addPlayer(promptPlayer);
        addScore(storedScore);

    console.log(scorePlayerArray);
var scorePlayerStr = JSON.stringify(scorePlayerArray);
localStorage.setItem("Player", scorePlayerStr);
var getArray = localStorage.getItem("Player");
    console.log(getArray);

    addUserScore();
}

var playerName = [{ playerName: "Bob" }];    
function addUserScore(event) {
    
    var innerHTMLuserScore = promptPlayer + " " + $("#score").text();
        console.log($("#score").text());
        console.log(innerHTMLuserScore);
        
    var li = document.createElement("li");
        li.id = playerName.length;
        li.innerHTML = innerHTMLuserScore;

    console.log(li.innerHTML);
    playerName.push({playerName: innerHTMLuserScore});
    $("#playerList").append(li);
}