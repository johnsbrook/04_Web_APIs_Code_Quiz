var gameScore = 0;
$("#score").text(gameScore);
var secondsLeft = 60;
var timerCountdown;

var style = ' col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">';
var imgStyle = ' style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;';

var row1 = '<div id="row1" class="col-sm-10 mx-auto"></div>';

var btnWrong = '<button class="wrong answer';
var btnRight = '<button id="correct" class="answer'
var endBtn = '</button>';

var imgOpen = '<div><img src="images/';
var imgClose = '"></div>';

var br = '<br>'

var allAnswers = {
  question1: [
    btnWrong + style + "a) Kensington, United Kingdom" + endBtn + br,
    btnRight + style + "b) London, United Kingdom" + endBtn + br,
    btnWrong + style + "c) London, Canada" + endBtn + br,
    btnWrong + style + 'd) Windsor, United Kingdom' + endBtn + br
  ],
  question2: [
    btnWrong + style + "a) Delhi, India" + endBtn + br,
    btnWrong + style + "b) Agra, India" + endBtn + br,
    btnWrong + style + "c) Jaipur, India" + endBtn + br,
    btnRight + style + "d) Mumbai, India" + endBtn + br
  ],
  question3: [
    btnWrong + style + 'a) A beach resort in Indonesia' + endBtn + br,
    btnWrong + style + 'b) A ruin in Cambodia' + endBtn + br,
    btnRight + style + 'c) An ancient city in Pakistan' + endBtn + br,
    btnWrong + style + 'd) A tribe in Africa' + endBtn + br
  ],

  question4: [
    btnWrong + style + "a) Buenos Aires" + endBtn + br,
    btnRight + style + "b) Lima" + endBtn + br,
    btnWrong + style + "c) Bogota" + endBtn + br,
    btnWrong + style + "d) Rio de Janeiro" + endBtn + br
  ],
  question5: [
    btnWrong + style + "a) Madrid, Spain" + endBtn + br,
    btnWrong + style + "b) Mexico City, Mexico" + endBtn + br,
    btnWrong + style + "c) Lisbon, Portugal" + endBtn + br,
    btnRight + style + "d) Barcelona, Spain" + endBtn + br
  ],

  images1: [
    imgOpen + 'kensington.jpg"' + imgStyle + imgClose,
    imgOpen + 'taj-hotel.jpg"' + imgStyle + imgClose,
    imgOpen + 'mohenjo-daro.jpg"' + imgStyle + imgClose,
    imgOpen + 'lima.jpg"' + imgStyle + imgClose,
    imgOpen + 'sagrada-familia.jpg"' + imgStyle + imgClose
  ]
};


$("#startQuiz").on("click", function () {
  timerCountdown();
  question1();
});

function timerCountdown() {
  timerCountdown = setInterval(function () {
    secondsLeft--;
    $("#countdown").text(secondsLeft);
    if (secondsLeft < 1) {
      clearInterval(timerCountdown);
      $("#countdown").text("0");
      gameOver();
      enterScore();
      stopTimer();
    }
  }, 1000);
}

function question1() {
  $("#quizPage").text("");
  $("#finalScore").text("");
  $("#quizPage").append(row1);
  $("#row1").append("<h1>In which city is Kensington Palace?</h1>");
  $('#row1').append(allAnswers.images1[0]);
  for (var i = 0; i < allAnswers.question1.length; i++) {
    $("#row1").append(allAnswers.question1[i]);
  }

  

  $(".wrong").click(function () {
    secondsLeft -= 10;
    question2();
  });
  $("#correct").click(function () {
    gameScore += 300;
    $("#score").text(gameScore);
    question2();
  });
}

function question2() {
  $("#quizPage").text("");
  $("#finalScore").text("");
  $("#quizPage").append(row1);
  $("#row1").append("<h1>In what city and country is the Taj Mahal Hotel?</h1>");
  $('#row1').append(allAnswers.images1[1]);

  for (var i = 0; i < allAnswers.question2.length; i++) {
    $("#row1").append(
      '<span>' + allAnswers.question2[i] + "</span>"
    );
  }

  $(".wrong").click(function () {
    secondsLeft -= 10;
    question3();
  });

  $("#correct").click(function () {
    gameScore += 600;
    $("#score").text(gameScore);
    question3();
  });
}

function question3() {
  $("#quizPage").text("");
  $("#finalScore").text("");
  $("#quizPage").append(row1);
  $("#row1").append("<h1>What is Mohenjo Daro?</h1>");
  $('#row1').append(allAnswers.images1[2]);

  for (var i = 0; i < allAnswers.question3.length; i++) {
    $("#row1").append(allAnswers.question3[i]);
  }

  $(".wrong").click(function () {
    secondsLeft -= 10;
    question4();
  });

  $("#correct").click(function () {
    gameScore += 450;
    $("#score").text(gameScore);
    question4();
  });
}

function question4() {
  $("#quizPage").text("");
  $("#finalScore").text("");
  $("#quizPage").append(row1);
  $("#row1").append("<h1>Which city is known as the culinary capital of South America?</h1>");
  $('#row1').append(allAnswers.images1[3]);

  for (var i = 0; i < allAnswers.question4.length; i++) {
    $("#row1").append(allAnswers.question4[i]);
  }

  $(".wrong").click(function () {
    secondsLeft -= 10;
    question5();
  });

  $("#correct").click(function () {
    gameScore += 450;
    $("#score").text(gameScore);
    question5();
  });
}

function question5() {
  $("#quizPage").text("");
  $("#finalScore").text("");
  $("#quizPage").append(row1);
  $("#row1").append("<h1>Where is Sagrada Familia cathedral?</h1>");
  $('#row1').append(allAnswers.images1[4]);

  for (var i = 0; i < allAnswers.question5.length; i++) {
    $("#row1").append(allAnswers.question5[i]);
  }

  $(".wrong").click(function () {
    secondsLeft -= 10;
    if (secondsLeft < 1) {
      gameOver();
      enterScore();
      stopTimer();
    } else {
      youWin();
      enterScore();
      stopTimer();
      reloadShow()
    }
  });

  $("#correct").click(function () {
    gameScore += 450;
    $("#score").text(gameScore);
    youWin();
    enterScore();
    stopTimer();
    reloadShow()
  });
}


function youWin() {  
  $("#quizPage").text("");
  $("#quizPage").append(
    '<div><img src="images/youwin.jpg" alt="Bravo, You WIN!" id="youWin" class="col-sm-10 mx-auto youWin" style="max-width: 350px; height: auto; border-radius: 25px;"></div>');
}

function gameOver() {
  $("#quizPage").text("");
  $("#quizPage").append(
    '<div><img src="images/game-over.jpg" alt="Game Over" id="gameOver" class="col-sm-10 mx-auto gameOver" style= "max-width: 350px; height: auto; border-radius: 25px;"></div>'
  );
}

function enterScore() {
  $("#quizPage").append('<div id="createScore" class="col-sm-10 mx-auto my-2">' + "YOUR HIGH SCORE IS: " + $("#score").text()
  );
  $("#quizPage").append('<button id="reloadGame" class="StartQuiz col-10 col-md-3 mx-auto my-3 bg-primary text-white">' + "Restart Game" + '</button>');
  $("#reloadGame").on("click", function() {
    location.reload();
  })


  promptScore();
}

function stopTimer() {
  $("#countdown").text("CODING RULES!");
  $("#countdown").attr("style", 'color: black; font-weight: bold;"');
  clearInterval(timerCountdown);
}

var scorePlayerArray = [[], []];
var promptPlayer = "";
var storedScore = "";

function promptScore() {
  promptPlayer = prompt("Enter your name: ");
  alert(promptPlayer + ", your score is " + $("#score").text() + "!");
  storedScore = $("#score").text();

  var addPlayer = function (num) {
    scorePlayerArray[0].push(num);
  };
  var addScore = function (num) {
    scorePlayerArray[1].push(num);
  };
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
  playerName.push({ playerName: innerHTMLuserScore });
  $("#quizPage").append(li);
  console.log(li)
}


