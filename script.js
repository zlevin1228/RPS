Window.onload = changeUsername(); // Runs function when page loads

function changeUsername(element) {
  var username = prompt("Enter your username:"); // Asks for your username
  document.getElementById("username").innerHTML = username; // Displays Username
}

var userPoints = 0 // Sets initial score
var computerPoints = 0  

function playGame() {
  var userChoice = prompt("Enter your selection:"); // Asks user for choice
  if (
    userChoice.toUpperCase() === "ROCK" ||
    userChoice.toUpperCase() === "PAPER" ||
    userChoice.toUpperCase() === "SCISSORS" ||
    userChoice.toUpperCase() === "BOMB"
  ) {
    // Asks for user choices and if the words uppercase match then it will not give an error message
    if (userChoice.toUpperCase() === "ROCK") {
      (document.getElementById("usersChoice").src = "Images/rockimage.jpg");
    } else if (userChoice.toUpperCase() === "PAPER") {
      (document.getElementById("usersChoice").src = "Images/paper.jpg");
    } else if (userChoice.toUpperCase() === "SCISSORS") {
      (document.getElementById("usersChoice").src = "Images/scissors.webp");
    } else if (userChoice.toUpperCase() === "BOMB") {
      (document.getElementById("usersChoice").src = "Images/bomb.jpg");
    }
  } else {
    alert("Error!");
  }

  var computerChoice = Math.random(); // Computer makes a choice

  if (computerChoice <= 0.33) {
    computerChoice = "rock";
    (document.getElementById("computersChoice").src = "Images/rockimage.jpg");
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
    (document.getElementById("computersChoice").src = "Images/paper.jpg");
  } else {
    computerChoice = "scissors";
    (document.getElementById("computersChoice").src = "Images/scissors.webp");
  }

  var choice1 = userChoice; // sets new variables for the function
  var choice2 = computerChoice;

  if (choice1.toUpperCase() === choice2.toUpperCase()) { // If you win, lose, or tie it will display a message accordingly. It will also change a variable to help update the scoreboard
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">It is a tie!</h3>';
  } else if (choice1.toUpperCase() === "ROCK") {
    if (choice2.toUpperCase() === "PAPER") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose PAPER, you LOSE!</h3>';
      computerPoints++
    } else if (choice2.toUpperCase() === "SCISSORS")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") { 
    if (choice2.toUpperCase() === "SCISSORS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you LOSE!</h3>';
      computerPoints++
    } else if (choice2.toUpperCase() === "ROCK")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") {
    if (choice2.toUpperCase() === "ROCK") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you LOSE!</h3>';
      computerPoints++
    } else if (choice2.toUpperCase() === "SCISSORS")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose PAPER, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "BOMB") {
    userPoints++
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">You found the secret message! You WIN!</h3>'
  }

  if (computerPoints === 5) { // If the scoreboard reaches 5 display a new message
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Game over, Computer WINS! You LOSE!</h3>';
    computerPoints = 0
    userPoints = 0
  } else if (userPoints === 5) {
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">You WIN!</h3>';
    userPoints = 0
    computerPoints = 0
  }

  document.getElementById('userScore').innerHTML = '<h2 id="userScore">' + userPoints + '</h2>';
  document.getElementById('computerScore').innerHTML = '<h2 id="computerScore">' + computerPoints + '</h2>'; //Displays the new score
}





