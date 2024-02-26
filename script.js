Window.onload = changeUsername();

function changeUsername(element) {
  var username = prompt("Enter your username:"); // Asks for your username
  document.getElementById("username").innerHTML = username; // Displays Username
}

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
  const scoreUser = document.getElementById('userScore') // Setting score to start at 0
  const scoreComputer = document.getElementById('computerScore')
  var userPoints = 0
  var computerPoints = 0
  let result = ''


  if (choice1.toUpperCase() === choice2.toUpperCase()) {
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">It is a tie!</h3>';
    result = 'its a draw!'
  } else if (choice1.toUpperCase() === "ROCK") {
    if (choice2.toUpperCase() === "PAPER") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose PAPER, you LOSE!</h3>';
      result = 'you lost!'
    } else
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you WIN!</h3>';
    result = 'you win!'
  } else if (choice1.toUpperCase() === "PAPER") {
    if (choice2.toUpperCase() === "SCISSORS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you LOSE!</h3>';
      result = 'you lost!'
    } else
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you WIN!</h3>';
    result = 'you win!'
  } else if (choice1.toUpperCase() === "SCISSORS") {
    if (choice2.toUpperCase() === "ROCK") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you lose!</h3>';
      result = 'you lost!'
    } else
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose PAPER, you WIN!</h3>';
    result = 'you win!'
  } else if (choice1.toUpperCase() === "BOMB") {
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">You found the secret message! You WIN!</h3>'
    result = 'you win!'
  }

  if (result == 'you win!') {
    ps += 1
  }
  else if (result == 'you lose!') {
    console.log("ok2")
    cs += 1
  }
  else {
    cs += 1
    ps += 1
  }

  computerScore.innerHTML = ("computerPoints");
  userScore.innerHTML = ("userPoints");

}





