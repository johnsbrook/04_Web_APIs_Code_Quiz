var quizPage = document.querySelector("#quizPage");
var welcome = document.querySelector("#welcome");
var codeQuiz = document.querySelector("#codeQuiz");
var intro = document.querySelector("#intro");
var introParagraph = document.querySelector("#introParagraph");
var goodLuck = document.querySelector("#goodLuck");
var countdown = document.querySelector("#countdown");


// Creates function to click and start countdown and quiz
var startQuiz = document.querySelector("#startQuiz");
    startQuiz = startQuiz.addEventListener("click", function() {

        timerCountdown();
        question1();

    });


// Sets countdown from 60 to 0 seconds
function timerCountdown() {

    var secondsLeft = 5;    
    var timerCountdown = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerCountdown);
            gameOver();
        }
    }, 1000);
}

function gameOver() {

    quizPage.textContent = "";
    var gameOver = document.createElement("img");
        gameOver.setAttribute("class", "col-sm-10 mx-auto gameOver");
        gameOver.setAttribute("id", "gameOver");
        gameOver.setAttribute("src", "game-over.gif");
        gameOver.setAttribute("style", "height: 500px; width: auto;")
        quizPage.appendChild(gameOver);

}

function question1() {

    quizPage.textContent = "";

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
        question1Answer1.setAttribute("class", "question1 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer1.setAttribute("id", "question1Answer1");
        row1.appendChild(question1Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question1Answer2 = document.createElement("button");
        question1Answer2.textContent = "b) Hypertext Markup Language";
        question1Answer2.setAttribute("class", "question1 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer2.setAttribute("id", "question1Answer2");
        row1.appendChild(question1Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question1Answer3 = document.createElement("button");
        question1Answer3.textContent = "c) Hypermarkup Language";
        question1Answer3.setAttribute("class", "question1 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer3.setAttribute("id", "question1Answer3");
        row1.appendChild(question1Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question1Answer4 = document.createElement("button");
        question1Answer4.textContent = "d) Hypermarkup Text Language";
        question1Answer4.setAttribute("class", "question1 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question1Answer4.setAttribute("id", "question1Answer4");
        row1.appendChild(question1Answer4);

    var clickedAnswer = document.querySelector(".question1");
        clickedAnswer = clickedAnswer.addEventListener("click", function() {
    
        quizPage.textContent = "";
        question2();
    
    });
}

function question2() {

    quizPage.textContent = "";

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
        question2Answer1.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer1.setAttribute("id", "question2Answer1");
        row1.appendChild(question2Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question2Answer2 = document.createElement("button");
        question2Answer2.textContent = "b) Content Discretionary Network";
        question2Answer2.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer2.setAttribute("id", "question2Answer2");
        row1.appendChild(question2Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question2Answer3 = document.createElement("button");
        question2Answer3.textContent = "c) Content Depository Network";
        question2Answer3.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer3.setAttribute("id", "question2Answer3");
        row1.appendChild(question2Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question2Answer4 = document.createElement("button");
        question2Answer4.textContent = "d) Content Delivery Network";
        question2Answer4.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer4.setAttribute("id", "question2Answer4");
        row1.appendChild(question2Answer4);

    var clickedAnswer2 = document.querySelector(".question2");
        clickedAnswer2 = clickedAnswer2.addEventListener("click", function() {
    
        question3();
    
    });
}

function question3() {

    quizPage.textContent = "";

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
        question3Answer1.setAttribute("class", "question3 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer1.setAttribute("id", "question3Answer1");
        row1.appendChild(question3Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question3Answer2 = document.createElement("button");
        question3Answer2.textContent = 'b) <link rel="" src="">;'
        question3Answer2.setAttribute("class", "question3 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer2.setAttribute("id", "question3Answer2");
        row1.appendChild(question3Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question3Answer3 = document.createElement("button");
        question3Answer3.textContent = 'c) <link rel="" href="">';
        question3Answer3.setAttribute("class", "question3 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer3.setAttribute("id", "question3Answer3");
        row1.appendChild(question3Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question3Answer4 = document.createElement("button");
        question3Answer4.textContent = 'a) <link type="" src="">';
        question3Answer4.setAttribute("class", "question3 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question3Answer4.setAttribute("id", "question3Answer4");
        row1.appendChild(question3Answer4);

    var clickedAnswer3 = document.querySelector(".question3");
        clickedAnswer3 = clickedAnswer3.addEventListener("click", function() {
    
        question3();
    
    });
}

function question2() {

    quizPage.textContent = "";

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
        question2Answer1.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer1.setAttribute("id", "question2Answer1");
        row1.appendChild(question2Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question2Answer2 = document.createElement("button");
        question2Answer2.textContent = "b) Content Discretionary Network";
        question2Answer2.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer2.setAttribute("id", "question2Answer2");
        row1.appendChild(question2Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question2Answer3 = document.createElement("button");
        question2Answer3.textContent = "c) Content Depository Network";
        question2Answer3.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer3.setAttribute("id", "question2Answer3");
        row1.appendChild(question2Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question2Answer4 = document.createElement("button");
        question2Answer4.textContent = "d) Content Delivery Network";
        question2Answer4.setAttribute("class", "question2 answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left");
        question2Answer4.setAttribute("id", "question2Answer4");
        row1.appendChild(question2Answer4);

    var clickedAnswer2 = document.querySelector(".question2");
        clickedAnswer2 = clickedAnswer2.addEventListener("click", function() {
    
        question3();
    
    });
}