var gameScore = 0;
$("#score").text(gameScore);
var secondsLeft = 30;
var timerCountdown;

var allAnswers = {
  question1: [
    '<span class="wrong">' + "a) Kensington, United Kingdom" + "</span>",
    '<span id="correct">' + "b) London, United Kingdom" + "</span>",
    '<span class="wrong">' + "c) London, Canada" + "</span>",
    "<span class='wrong'>" + "d) Windsor, United Kingdom" + "</span>",
  ],
  question2: [
    '<span class="wrong">' + "a) Delhi, India" + "</span>",
    '<span class="wrong">' + "b) Agra, India" + "</span>",
    '<span class="wrong">' + "c) Jaipur, India" + "</span>",
    '<span id="correct">' + "d) Mumbai, India" + "</span>",
  ],
  question3: [
    '<span class="wrong">' + 'a) A beach resort in Indonesia' + "</span>",
    '<span class="wrong">' + 'b) A ruin in Cambodia' + "</span>",
    '<span id="correct">' + 'c) An ancient city in Pakistan' + "</span>",
    '<span class="wrong">' + 'd) A tribe in Africa' + "</span>",
  ],

  question4: [
    '<span class="wrong">' + "a) Buenos Aires" + "</span>",
    '<span id="correct">' + "b) Lima" + "</span>",
    '<span class="wrong">' + "c) Bogota" + "</span>",
    '<span class="wrong">' + "d) Rio de Janeiro" + "</span>",
  ],
  question5: [
    '<span class="wrong">' + "a) Madrid, Spain" + "</span>",
    '<span class="wrong">' + "b) Mexico City, Mexico" + "</span>",
    '<span class="wrong">' + "c) Lisbon, Portugal" + "</span>",
    '<span id="correct">' + "d) Barcelona, Spain" + "</span>",
  ],

  images1: [
    '<div><img src="images/kensington.jpg" style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;"></div>',
    '<div><img src="images/taj-hotel.jpg" style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;"></div>',
    '<div><img src="images/mohenjo-daro.jpg" style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;"></div>',
    '<div><img src="images/lima.jpg" style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;"></div>',
    '<div><img src="images/sagrada-familia.jpg" style="width: 200px; height: auto; border-radius: 25px; box-shadow: 0px 0px 2px 2px lightgrey;"></div>',
  ],
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
  $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
  $("#row1").append("<h1>In which city is Kensington Palace?</h1>");
  $('#row1').append(allAnswers.images1[0]);
  for (var i = 0; i < allAnswers.question1.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question1[i] + "</button>" + "<br>"
    );
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
  $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
  $("#row1").append("<h1>In what city and country is the Taj Mahal Hotel?</h1>");
  $('#row1').append(allAnswers.images1[1]);

  for (var i = 0; i < allAnswers.question2.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question2[i] + "</button>" + "<br>"
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
  $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
  $("#row1").append("<h1>What is Mohenjo Daro?</h1>");
  $('#row1').append(allAnswers.images1[2]);

  for (var i = 0; i < allAnswers.question3.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question3[i] + "</button>" + "<br>"
    );
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
  $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
  $("#row1").append("<h1>Which city is known as the culinary capital of South America?</h1>");
  $('#row1').append(allAnswers.images1[3]);

  for (var i = 0; i < allAnswers.question4.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question4[i] + "</button>" + "<br>"
    );
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
  $("#quizPage").append('<div id="row1" class="col-sm-10 mx-auto"></div>');
  $("#row1").append("<h1>Where is Sagrada Familia cathedral?</h1>");
  $('#row1').append(allAnswers.images1[4]);

  for (var i = 0; i < allAnswers.question5.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question5[i] + "</button>" + "<br>"
    );
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


