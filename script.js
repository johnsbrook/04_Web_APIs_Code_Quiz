var startQuiz = document.querySelector("#startQuiz");
    startQuiz = startQuiz.addEventListener("click", function() {

    countdown();

    });

var secondsLeft = 60;

function countdown() {
    var countdown = document.querySelector("#countdown");
    var timerCountdown = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerCountdown);
        }
    }, 1000);
}