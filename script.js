Window.onload = changeUsername(); // Runs function when page loads

function changeUsername(element) {
  var username = prompt("Enter your username:"); // Asks for your username
  document.getElementById("username").innerHTML = username; // Displays Username
}

var userPoints = 0 // Sets initial score
var computerPoints = 0  
let mode = 'rps'

function playGameRPS() {
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
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "SCISSORS")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") { 
    if (choice2.toUpperCase() === "SCISSORS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "ROCK")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") {
    if (choice2.toUpperCase() === "ROCK") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
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

function playGamePokemon() {
  var userChoice = prompt("Enter your selection:"); // Asks user for choice
  if (
    userChoice.toUpperCase() === "ARTICUNO" ||
    userChoice.toUpperCase() === "ZAPDOS" ||
    userChoice.toUpperCase() === "MOLTRES" ||
    userChoice.toUpperCase() === "MEWTWO"
  ) {
    // Asks for user choices and if the words uppercase match then it will not give an error message
    if (userChoice.toUpperCase() === "ARTICUNO") {
      (document.getElementById("usersChoice").src = "articuno.webp");
    } else if (userChoice.toUpperCase() === "ZAPDOS") {
      (document.getElementById("usersChoice").src = "Images/zapdos.webp");
    } else if (userChoice.toUpperCase() === "MOLTRES") {
      (document.getElementById("usersChoice").src = "Images/moltres.webp");
    } else if (userChoice.toUpperCase() === "MEWTWO") {
      (document.getElementById("usersChoice").src = "Images/mewtwo.png");
    }
  } else {
    alert("Error!");
  }

  var computerChoice = Math.random(); // Computer makes a choice

  if (computerChoice <= 0.33) {
    computerChoice = "articuno";
    (document.getElementById("computersChoice").src = "Images/articuno.webp");
  } else if (computerChoice <= 0.67) {
    computerChoice = "zapdos";
    (document.getElementById("computersChoice").src = "Images/zapdos.webp");
  } else {
    computerChoice = "moltres";
    (document.getElementById("computersChoice").src = "Images/moltres.webp");
  }

  var choice1 = userChoice; // sets new variables for the function
  var choice2 = computerChoice;

  if (choice1.toUpperCase() === choice2.toUpperCase()) { // If you win, lose, or tie it will display a message accordingly. It will also change a variable to help update the scoreboard
    document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">It is a tie!</h3>';
  } else if (choice1.toUpperCase() === "ARTICUNO") {
    if (choice2.toUpperCase() === "ZAPDOS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ZAPDOS, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "MOLTRES")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose MOLTRES, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "MOLTRES") { 
    if (choice2.toUpperCase() === "ZAPDOS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ZAPDOS, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "ARTICUNO")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ARTICUNO, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "ZAPDOS") {
    if (choice2.toUpperCase() === "ARITCUNO") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ARTICUNO, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "MOLTRES")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose MOLTRES, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "MEWTWO") {
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

function playGameDC() {
  var userChoice = prompt("Enter your selection:"); // Asks user for choice
  if (
    userChoice.toUpperCase() === "BATMAN" ||
    userChoice.toUpperCase() === "SUPERMAN" ||
    userChoice.toUpperCase() === "WONDER WOMAN" ||
    userChoice.toUpperCase() === "GREEN LANTERN"
  ) {
    // Asks for user choices and if the words uppercase match then it will not give an error message
    if (userChoice.toUpperCase() === "BATMAN") {
      (document.getElementById("usersChoice").src = "Images/rockimage.jpg");
    } else if (userChoice.toUpperCase() === "SUPERMAN") {
      (document.getElementById("usersChoice").src = "Images/paper.jpg");
    } else if (userChoice.toUpperCase() === "WONDER WOMAN") {
      (document.getElementById("usersChoice").src = "Images/scissors.webp");
    } else if (userChoice.toUpperCase() === "GREEN LANTERN") {
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
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "SCISSORS")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") { 
    if (choice2.toUpperCase() === "SCISSORS") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose SCISSORS, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
    } else if (choice2.toUpperCase() === "ROCK")
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you WIN!</h3>';
      userPoints++
  } else if (choice1.toUpperCase() === "PAPER") {
    if (choice2.toUpperCase() === "ROCK") {
      document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">Computer chose ROCK, you LOSE!</h3>';
      computerPoints++
      userPoints-- // Fixes the userPoints from increasing
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

function playGameOne() { // Changes game mode to RPS
  document.getElementById('rockimage').src = 'Images/rock.png'
  document.getElementById('rockitem').innerText = 'Rock'
  document.getElementById('paperimage').src = 'Images/paper.png'
  document.getElementById('paperitem').innerText = 'Paper'
  document.getElementById('scissorsimage').src = 'Images/scissors.png'
  document.getElementById('scissorsitem').innerText = 'Scissors'
  document.getElementById('howtoplay').innerText = 'Press the Start Game! button to begin. A prompt will pop up and ask you to type in a choice. You can choose from either ROCK, PAPER, SCISSORS, or a secret option that will guarantee you a win. The computer will display your choice and make its own choice. ROCK beats SCISSORS, SCISSORS beats PAPER, and PAPER beats ROCK. You will either win, tie, or lose. Your wins and the computers wins will be displayed in the scoreboard below. The first one to 5 round wins is the winner!'
  document.getElementById('usersChoice').src = 'Images/rockimage.jpg'
  document.getElementById('computersChoice').src = 'Images/rockimage.jpg'
  document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">The game has not started yet. You have selected the RPS mode.</h3>';
  mode = 'rps'
}

function playGameTwo() { // Changes game mode to Pokemon
  document.getElementById('rockimage').src = 'Images/articuno.webp'
  document.getElementById('rockitem').innerText = 'Articuno'
  document.getElementById('paperimage').src = 'Images/zapdos.webp'
  document.getElementById('paperitem').innerText = 'Zapdos'
  document.getElementById('scissorsimage').src = 'Images/moltres.webp'
  document.getElementById('scissorsitem').innerText = 'Moltres'
  document.getElementById('howtoplay').innerText = 'Press the Start Game! button to begin. A prompt will pop up and ask you to type in a choice. You can choose from either ARTICUNO, ZAPDOS, MOLTRES, or a secret option that will guarantee you a win. The computer will display your choice and make its own choice. ARTICUNO beats ZAPDOS, ZAPDOS beats MOLTRES, and MOLTRES beats ARTICUNO. You will either win, tie, or lose. Your wins and the computers wins will be displayed in the scoreboard below. The first one to 5 round wins is the winner!'
  document.getElementById('usersChoice').src = 'Images/articuno.webp'
  document.getElementById('computersChoice').src = 'Images/articuno.webp'
  document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">The game has not started yet. You have selected the Pokemon mode.</h3>';
  mode = 'pokemon'
}

function playGameThree() { // Changes game mode to Pokemon
  document.getElementById('rockimage').src = 'Images/batman.png'
  document.getElementById('rockitem').innerText = 'Batman'
  document.getElementById('paperimage').src = 'Images/superman.webp'
  document.getElementById('paperitem').innerText = 'Superman'
  document.getElementById('scissorsimage').src = 'Images/wonderwoman.png'
  document.getElementById('scissorsitem').innerText = 'Wonder Woman'
  document.getElementById('howtoplay').innerText = 'Press the Start Game! button to begin. A prompt will pop up and ask you to type in a choice. You can choose from either BATMAN, SUPERMAN, WONDER WOMAN, or a secret option that will guarantee you a win. The computer will display your choice and make its own choice. BATMAN beats SUPERMAN, SUPERMAN beats WONDER WOMAN, and WONDER WOMAN beats BATMAN. You will either win, tie, or lose. Your wins and the computers wins will be displayed in the scoreboard below. The first one to 5 round wins is the winner!'
  document.getElementById('usersChoice').src = 'Images/batman.png'
  document.getElementById('computersChoice').src = 'Images/batman.png'
  document.getElementById('messageResult').innerHTML = '<h3 class="align-items-center">The game has not started yet. You have selected the DC mode.</h3>';
  mode = 'dc'
}




