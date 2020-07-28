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
        }
    }, 1000);
}

// Stops Timer if user finishes game
function stopTimer() {
    countdown.textContent = "You WIN";
    clearInterval(timerCountdown);

    enterScore();
}

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




function question1() {

    quizPage.textContent = "";
    finalScore.textContent = "";

    var row1 = document.createElement("div");
        row1.setAttribute("class", "col-sm-10 mx-auto");
        row1.setAttribute("id", "row1");
        quizPage.appendChild(row1);

    var question1 = document.createElement("h1");
        question1.textContent = "What does the acronym HTML stands for? ";
        question1.setAttribute("style", "display-5");
        row1.appendChild(question1);

    var question1Answer1 = document.createElement("button");
        question1Answer1.textContent = "a) Hypertext Markup Link";
        question1Answer1.setAttribute("class", "question1a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer1.setAttribute("id", "question1Answer1");
        row1.appendChild(question1Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question1Answer2 = document.createElement("button");
        question1Answer2.textContent = "b) Hypertext Markup Language";
        question1Answer2.setAttribute("class", "question1b answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer2.setAttribute("id", "question1Answer2");
        row1.appendChild(question1Answer2);
        


    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question1Answer3 = document.createElement("button");
        question1Answer3.textContent = "c) Hypermarkup Language";
        question1Answer3.setAttribute("class", "question1c answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer3.setAttribute("id", "question1Answer3");
        row1.appendChild(question1Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question1Answer4 = document.createElement("button");
        question1Answer4.textContent = "d) Hypermarkup Text Language";
        question1Answer4.setAttribute("class", "question1d answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer4.setAttribute("id", "question1Answer4");
        row1.appendChild(question1Answer4);
        

    var clickedAnswerA = document.querySelector(".question1a");
        clickedAnswerA = clickedAnswerA.addEventListener("click", function() {    
        question2();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerB = document.querySelector(".question1b");
        clickedAnswerB = clickedAnswerB.addEventListener("click", function() {        
        question2();
        gameScore = gameScore + 300;
        score.textContent = gameScore;
    });
    var clickedAnswerC = document.querySelector(".question1c");
        clickedAnswerC = clickedAnswerC.addEventListener("click", function() {
        question2();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerD = document.querySelector(".question1d");
        clickedAnswerD = clickedAnswerD.addEventListener("click", function() {
        question2();
        secondsLeft = secondsLeft - 10;
    });

    
}



// Question #2 following the same parameters and guidelines as in Question #1 
function question2() {

    quizPage.textContent = "";
    finalScore.textContent = "";

    var row1 = document.createElement("div");
        row1.setAttribute("class", "col-sm-10 mx-auto");
        row1.setAttribute("id", "row1");
        quizPage.appendChild(row1);

    var question2 = document.createElement("h1");
        question2.textContent = "What's a CDN?";
        question2.setAttribute("style", "display-5");
        row1.appendChild(question2);

    var question2Answer1 = document.createElement("button");
        question2Answer1.textContent = "a) Content Display Network";
        question2Answer1.setAttribute("class", "question2a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer1.setAttribute("id", "question2Answer1");
        row1.appendChild(question2Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question2Answer2 = document.createElement("button");
        question2Answer2.textContent = "b) Content Discretionary Network";
        question2Answer2.setAttribute("class", "question2b answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer2.setAttribute("id", "question2Answer2");
        row1.appendChild(question2Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question2Answer3 = document.createElement("button");
        question2Answer3.textContent = "c) Content Depository Network";
        question2Answer3.setAttribute("class", "question2c answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer3.setAttribute("id", "question2Answer3");
        row1.appendChild(question2Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question2Answer4 = document.createElement("button");
        question2Answer4.textContent = "d) Content Delivery Network";
        question2Answer4.setAttribute("class", "question2d answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer4.setAttribute("id", "question2Answer4");
        row1.appendChild(question2Answer4);

    var clickedAnswerA = document.querySelector(".question2a");
        clickedAnswerA = clickedAnswerA.addEventListener("click", function() {    
        question3();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerB = document.querySelector(".question2b");
        clickedAnswerB = clickedAnswerB.addEventListener("click", function() {
        question3();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerC = document.querySelector(".question2c");
        clickedAnswerC = clickedAnswerC.addEventListener("click", function() {
        question3();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerD = document.querySelector(".question2d");
        clickedAnswerD = clickedAnswerD.addEventListener("click", function() {
        question3();
        gameScore = gameScore + 600;
        score.textContent = gameScore;
    });
       
}


// Question #3 
function question3() {

    quizPage.textContent = "";
    finalScore.textContent = "";

    var row1 = document.createElement("div");
        row1.setAttribute("class", "col-sm-10 mx-auto");
        row1.setAttribute("id", "row1");
        quizPage.appendChild(row1);

    var question3 = document.createElement("h1");
        question3.textContent = "What do you use to link a stylesheet?";
        question3.setAttribute("style", "display-5");
        row1.appendChild(question3);

    var question3Answer1 = document.createElement("button");
        question3Answer1.textContent = 'a) <link type="" href="">';
        question3Answer1.setAttribute("class", "question3a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer1.setAttribute("id", "question3Answer1");
        row1.appendChild(question3Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question3Answer2 = document.createElement("button");
        question3Answer2.textContent = 'b) <link rel="" src="">';
        question3Answer2.setAttribute("class", "question3b answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer2.setAttribute("id", "question3Answer2");
        row1.appendChild(question3Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question3Answer3 = document.createElement("button");
        question3Answer3.textContent = 'c) <link rel="" href="">';
        question3Answer3.setAttribute("class", "question3c answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer3.setAttribute("id", "question3Answer3");
        row1.appendChild(question3Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question3Answer4 = document.createElement("button");
        question3Answer4.textContent = 'd) <link type="" src="">';
        question3Answer4.setAttribute("class", "question3d answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer4.setAttribute("id", "question3Answer4");
        row1.appendChild(question3Answer4);

    var clickedAnswerA = document.querySelector(".question3a");
        clickedAnswerA = clickedAnswerA.addEventListener("click", function() {    
        question4();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerB = document.querySelector(".question3b");
        clickedAnswerB = clickedAnswerB.addEventListener("click", function() {
        question4();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerC = document.querySelector(".question3c");
        clickedAnswerC = clickedAnswerC.addEventListener("click", function() {
        question4();
        gameScore = gameScore + 450;
        score.textContent = gameScore;
    });
    var clickedAnswerD = document.querySelector(".question3d");
        clickedAnswerD = clickedAnswerD.addEventListener("click", function() {
        question4();
        secondsLeft = secondsLeft - 10;
    });
    

}


// Question #4
function question4() {

    quizPage.textContent = "";
    finalScore.textContent = "";

    var row1 = document.createElement("div");
        row1.setAttribute("class", "col-sm-10 mx-auto");
        row1.setAttribute("id", "row1");
        quizPage.appendChild(row1);

    var question4 = document.createElement("h1");
        question4.textContent = "What is the symbol to define class?";
        question4.setAttribute("style", "display-5");
        row1.appendChild(question4);

    var question4Answer1 = document.createElement("button");
        question4Answer1.textContent = "a) # (pound or number sign) ";
        question4Answer1.setAttribute("class", "question4a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question4Answer1.setAttribute("id", "question4Answer1");
        row1.appendChild(question4Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question4Answer2 = document.createElement("button");
        question4Answer2.textContent = "b) . (period)";
        question4Answer2.setAttribute("class", "question4b answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question4Answer2.setAttribute("id", "question4Answer2");
        row1.appendChild(question4Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question4Answer3 = document.createElement("button");
        question4Answer3.textContent = "c) { } (curly brackets)";
        question4Answer3.setAttribute("class", "question4c answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question4Answer3.setAttribute("id", "question4Answer3");
        row1.appendChild(question4Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question4Answer4 = document.createElement("button");
        question4Answer4.textContent = "d) [ ] (brackets)";
        question4Answer4.setAttribute("class", "question4d answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question4Answer4.setAttribute("id", "question4Answer4");
        row1.appendChild(question4Answer4);

    var clickedAnswerA = document.querySelector(".question4a");
        clickedAnswerA = clickedAnswerA.addEventListener("click", function() {    
        question5();
    
    });
    var clickedAnswerB = document.querySelector(".question4b");
        clickedAnswerB = clickedAnswerB.addEventListener("click", function() {
        question5();
        gameScore = gameScore + 150;
        score.textContent = gameScore;
    });
    var clickedAnswerC = document.querySelector(".question4c");
        clickedAnswerC = clickedAnswerC.addEventListener("click", function() {
        question5();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerD = document.querySelector(".question4d");
        clickedAnswerD = clickedAnswerD.addEventListener("click", function() {
        question5();
        secondsLeft = secondsLeft - 10;
    });

}


// Question #5
function question5() {

    quizPage.textContent = "";
    finalScore.textContent = "";

    var row1 = document.createElement("div");
        row1.setAttribute("class", "col-sm-10 mx-auto");
        row1.setAttribute("id", "row1");
        quizPage.appendChild(row1);

    var question5 = document.createElement("h1");
        question5.textContent = "Which type of file you need to create to customize a page's style?";
        question5.setAttribute("style", "display-5");
        row1.appendChild(question5);

    var question5Answer1 = document.createElement("button");
        question5Answer1.textContent = 'a) Class Style Sheet (.css)';
        question5Answer1.setAttribute("class", "question5a answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question5Answer1.setAttribute("id", "question5Answer1");
        row1.appendChild(question5Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question5Answer2 = document.createElement("button");
        question5Answer2.textContent = 'b) Cascading Style File (.css)'
        question5Answer2.setAttribute("class", "question5b answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question5Answer2.setAttribute("id", "question5Answer2");
        row1.appendChild(question5Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question5Answer3 = document.createElement("button");
        question5Answer3.textContent = 'c) Classifying Stylesheet (.css)';
        question5Answer3.setAttribute("class", "question5c answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question5Answer3.setAttribute("id", "question5Answer3");
        row1.appendChild(question5Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question5Answer4 = document.createElement("button");
        question5Answer4.textContent = 'd) Cascading Style Sheets (.css)';
        question5Answer4.setAttribute("class", "question5d answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question5Answer4.setAttribute("id", "question5Answer4");
        row1.appendChild(question5Answer4);

    var clickedAnswerA = document.querySelector(".question5a");
        clickedAnswerA = clickedAnswerA.addEventListener("click", function() {    
        secondsLeft = secondsLeft - 10;
        if (secondsLeft < 1) {
            gameOver(); 
        } else { 
            youWin();
            stopTimer();
          };
        
    
        
    });
    var clickedAnswerB = document.querySelector(".question5b");
        clickedAnswerB = clickedAnswerB.addEventListener("click", function() {
        youWin();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerC = document.querySelector(".question5c");
        clickedAnswerC = clickedAnswerC.addEventListener("click", function() {
        youWin();
        secondsLeft = secondsLeft - 10;
    });
    var clickedAnswerD = document.querySelector(".question5d");
        clickedAnswerD = clickedAnswerD.addEventListener("click", function() {
        youWin();
        gameScore = gameScore + 450;
        score.textContent = gameScore;
        enterScore();
    });
    
}

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

stopTimer();

function enterScore() {
    // var finalScore = document.querySelector("#finalScore");
    var createScore = document.createElement("div");
        createScore.setAttribute("class", "col-sm-10 mx-auto");
        createScore.setAttribute("id", "createScore");
        finalScore.appendChild(createScore);
        createScore.textContent = "Your final score is: " + score.textContent;

}





