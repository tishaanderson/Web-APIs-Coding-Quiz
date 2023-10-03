var playerNameInput = document.getElementById("playerNameInput");
var scoreInput = document.getElementById("scoreInput");
var submitBtn = document.getElementById("submit-btn");
var highScoresList = document.getElementById("highscores-list");

var playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];

submitBtn.addEventListener("click", function () {
  var playerName = playerNameInput.value;
  var playerScore = parseInt(scoreInput.value);

  if (playerName && !isNaN(playerScore)) {
    var playerData = { name: playerName, score: playerScore };
    playerScores.push(playerData);
    playerScores.sort(function (a, b) {
      return b.score - a.score;
    });

    if (playerScores.length > 5) {
      playerScores.pop();
    }

    localStorage.setItem('playerScores', JSON.stringify(playerScores));
    
    highScoresList.innerHTML = '';

  for (var i = 0; i < playerScores.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = playerScores[i].name + " " + playerScores[i].score;

      highScoresList.appendChild(listItem);
    }

    playerNameInput.value = " ";
    scoreInput.value = "";
  } else {
    alert("Please enter a valid name and score.");
  }
});