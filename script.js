var gameScore = 0;
$("#score").text(gameScore);
var secondsLeft = 30;
var timerCountdown;

var allAnswers = {
  question1: [
    '<span class="wrong">' + "a) Hyertext Markup Link" + "</span>",
    '<span id="correct">' + "b) Hypertext Markup Language" + "</span>",
    '<span class="wrong">' + "c) Hypermarkup Language" + "</span>",
    "<span class='wrong'>" + "d) Hypermarkup Text Language" + "</span>",
  ],
  question2: [
    '<span class="wrong">' + "a) Content Display Network" + "</span>",
    '<span class="wrong">' + "b) Content Discretionary Network" + "</span>",
    '<span class="wrong">' + "c) Content Depository Network" + "</span>",
    '<span id="correct">' + "d) Content Delivery Network" + "</span>",
  ],
  question3: [
    '<span class="wrong">' + 'a) link type="" href=""' + "</span>",
    '<span class="wrong">' + 'b) link rel="" src=""' + "</span>",
    '<span id="correct">' + 'c) link rel="" href=""' + "</span>",
    '<span class="wrong">' + 'd) link type="" src=""' + "</span>",
  ],

  question4: [
    '<span class="wrong">' + "a) # (pound or number sign)" + "</span>",
    '<span id="correct">' + "b) . (period)" + "</span>",
    '<span class="wrong">' + "c) { } (curly brackets)" + "</span>",
    '<span class="wrong">' + "d) [ ] (brackets)" + "</span>",
  ],
  question5: [
    '<span class="wrong">' + "a) Class Style Sheet (.css)" + "</span>",
    '<span class="wrong">' + "b) Cascading Style File (.css)" + "</span>",
    '<span class="wrong">' + "c) Classifying Stylesheet (.css)" + "</span>",
    '<span id="correct">' + "d) Cascading Style Sheets (.css)" + "</span>",
  ],
};

$("#reload").hide();
$("#playerList").hide();

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
  $("#row1").append("<h1>What does the acronym HTML stands for?</h1>");

  for (var i = 0; i < allAnswers.question1.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question1[i] +
        "</button>" +
        "<br>"
    );
  }

  $("#wrong").click(function () {
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
  $("#row1").append("<h1>What's a CDN?</h1>");

  for (var i = 0; i < allAnswers.question2.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question2[i] +
        "</button>" +
        "<br>"
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
  $("#row1").append("<h1>What do you use to link a stylesheet?</h1>");

  for (var i = 0; i < allAnswers.question3.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question3[i] +
        "</button>" +
        "<br>"
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
  $("#row1").append("<h1>What do you use to link a stylesheet?</h1>");

  for (var i = 0; i < allAnswers.question4.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question4[i] +
        "</button>" +
        "<br>"
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
  $("#row1").append("<h1>What do you use to link a stylesheet?</h1>");

  for (var i = 0; i < allAnswers.question5.length; i++) {
    $("#row1").append(
      '<button class="answer col-12 col-md-8 col-lg-6 mx-auto my-2 p-3 text-left">' +
        allAnswers.question5[i] +
        "</button>" +
        "<br>"
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
    }
  });

  $("#correct").click(function () {
    gameScore += 450;
    $("#score").text(gameScore);
    youWin();
    enterScore();
    stopTimer();
  });
}

function youWin() {
  $("#reload").show();
  $("#playerList").show();
  $("#quizPage").text("");
  $("#quizPage").append(
    '<img src="youwin.gif" alt="Bravo, You WIN!" id="youWin" class="col-sm-10 mx-auto youWin" style="height: 200px; width: auto;">'
  );
}

function gameOver() {
  $("#reload").show();
  $("#playerList").show();
  $("#quizPage").text("");
  $("#quizPage").append(
    '<img src="game-over.gif" alt="Game Over" id="gameOver" class="col-sm-10 mx-auto gameOver" style= "height: 200px; width: auto;">'
  );
}

function enterScore() {
  $("#quizPage").append(
    '<div id="createScore" class="col-sm-10 mx-auto my-5">' +
      "YOUR HIGH SCORE IS: " +
      $("#score").text()
  );
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

$("#reload").on("click", function () {
  location.reload();
});
