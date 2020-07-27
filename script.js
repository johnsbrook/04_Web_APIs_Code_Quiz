var quizPage = document.querySelector("#quizPage");
var welcome = document.querySelector("#welcome");
var codeQuiz = document.querySelector("#codeQuiz");
var intro = document.querySelector("#intro");
var introParagraph = document.querySelector("#introParagraph");
var goodLuck = document.querySelector("#goodLuck");
var startQuiz = document.querySelector("#startQuiz");
var countdown = document.querySelector("#countdown");

// Creates function to click and start countdown and quiz
startQuiz = startQuiz.addEventListener("click", function() {

    timerCountdown();

    });


// Sets countdown from 60 to 0 seconds
function timerCountdown() {

    var secondsLeft = 1;    
    var timerCountdown = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerCountdown);
            question1();
        }
    }, 1000);
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
        question1Answer1.setAttribute("class", "answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-white text-left");
        question1Answer1.setAttribute("id", "question1Answer1");
        row1.appendChild(question1Answer1);

    var br1 = document.createElement("br");
        row1.appendChild(br1);

    var question1Answer2 = document.createElement("button");
        question1Answer2.textContent = "b) Hypertext Markup Language";
        question1Answer2.setAttribute("class", "answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 bg-primary text-white text-left");
        question1Answer2.setAttribute("id", "question1Answer2");
        row1.appendChild(question1Answer2);

    var br2 = document.createElement("br");
        row1.appendChild(br2);

    var question1Answer3 = document.createElement("button");
        question1Answer3.textContent = "c) Hypermarkup Language";
        question1Answer3.setAttribute("class", "answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 bg-primary text-white text-left");
        question1Answer3.setAttribute("id", "question1Answer3");
        row1.appendChild(question1Answer3);
    
    var br3 = document.createElement("br");
        row1.appendChild(br3);

    var question1Answer4 = document.createElement("button");
        question1Answer4.textContent = "d) Hypermarkup Text Language";
        question1Answer4.setAttribute("class", "answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 bg-primary text-white text-left");
        question1Answer4.setAttribute("id", "question1Answer4");
        row1.appendChild(question1Answer4);

    // 
    // b) Hypertext Markup Language
    // 
    // 

}