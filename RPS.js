const results = document.getElementById('Results');
const possibleChoices = document.querySelectorAll('.btn');
const cScore = document.getElementById('Cscore');
const uScore = document.getElementById('Uscore');
const roundResults = document.getElementById('round-results');
const resetButton = document.getElementById('newGameButton');
const urlParams = new URLSearchParams(window.location.search);
const rounds = urlParams.get('rounds');

let userChoiceDisplay = document.querySelector('#user-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');
let computerScore = 0;
let userScore = 0;
let computerChoice;
let userChoice;
let outcome = '';
let nRounds = parseInt(rounds);
let roundScoreC = 0;
let roundScoreU = 0;
let tracker = document.getElementById('tracker');
let rpsDisplay = {
   Rock: "Photos/cRock.png",
   Paper: "Photos/cPaper.png",
   Scissors: "Photos/cScissors.png",
};

// computer choices
function getComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
      computerChoice = rpsDisplay.Rock;
   } else if (randomNumber === 1) {
      computerChoice = rpsDisplay.Paper;
   } else if (randomNumber === 2) {
      computerChoice = rpsDisplay.Scissors;
   }
   const img = document.createElement('img');
   img.src = computerChoice;
   img.style.opacity = 0;
   computerChoiceDisplay.appendChild(img);
   // Clear any previous content in computerChoiceDisplay
   computerChoiceDisplay.img = computerChoice;
   // Append the image element to computerChoiceDisplay
   setTimeout(() => {
      img.style.opacity = 1;
   }, 10);
}

// get user choice
function userO(event) {
   if (event.target === possibleChoices[0]) {
      userChoice = rpsDisplay.Rock;
   } else if (event.target === possibleChoices[1]) {
      userChoice = rpsDisplay.Paper;
   } else if (event.target === possibleChoices[2]) {
      userChoice = rpsDisplay.Scissors;
   }
   let imgU = document.createElement('img');
   imgU.src = userChoice;
   imgU.style.opacity = 0;
   userChoiceDisplay.appendChild(imgU);
   // Clear any previous content in computerChoiceDisplay
   userChoiceDisplay.img = userChoice;
   setTimeout(() => {
      imgU.style.opacity = 1;
   }, 10);
   getComputerChoice();
   getResult();
   sRound();
   gameOver();
}

// results
function getResult() {
   if (userScore >= 3 || computerScore >= 3) {
      return; // Return early if the round is already won by either user or computer
   }
   let outcome
 switch (true){
   case (userChoice === rpsDisplay.Rock && computerChoice === rpsDisplay.Paper):
      computerScore++;
      outcome = 'You Lose, Paper beats Rock';
      break;
   case (userChoice === computerChoice): 
      outcome = `It's a draw!`;
      break;
   case (userChoice === rpsDisplay.Scissors && computerChoice === rpsDisplay.Rock): 
      computerScore++;
      outcome = 'You Lose, Rock Beats Scissors';
      break;
   case (userChoice === rpsDisplay.Paper && computerChoice === rpsDisplay.Scissors):
      computerScore++;
      outcome = 'You Lose, Scissors beats Paper';
      break;
   case (computerChoice === rpsDisplay.Rock && userChoice === rpsDisplay.Paper):
      userScore++;
      outcome = 'You Win, Paper beats Rock';
      break;
   case (computerChoice === rpsDisplay.Paper && userChoice === rpsDisplay.Scissors): 
      userScore++;
      outcome = 'You Win, Scissors beats Paper';
      break;
   case (computerChoice === rpsDisplay.Scissors && userChoice === rpsDisplay.Rock):
      userScore++;
      outcome = 'You Win, Rock beats Scissors';
   }
   results.innerHTML = outcome;
   cScore.innerHTML = computerScore;
   uScore.innerHTML = userScore;
}

// roundWinner-roundLoser (show messages)
function sRound() {
   if (userScore >= 3) {
      roundScoreU++;
      roundResults.innerHTML = `You won this round ${userScore} to ${computerScore}.`;
      tracker.innerHTML = `You are playing ${nRounds} rounds User: ${roundScoreU} Computer: ${roundScoreC}`;
      setTimeout(clear, 4000);
    } else if (computerScore >= 3) {
      roundScoreC++;
      roundResults.innerHTML = `You lost this round ${computerScore} to ${userScore}.`;
      tracker.innerHTML = `You are playing ${nRounds} rounds User: ${roundScoreU} Computer: ${roundScoreC}`;
      setTimeout(clear, 4000);
   }
}

function resetRoundScores() {
   roundScoreC = 0;
   roundScoreU = 0;
}

function clear() {
   results.innerHTML = '';
   cScore.innerHTML = '';
   uScore.innerHTML = '';
   roundResults.innerHTML = '';
   userScore = 0;
   computerScore = 0;
   userChoiceDisplay.innerHTML = '';
   computerChoiceDisplay.innerHTML = '';
}

function gameOver() {
   if (roundScoreC == nRounds) {
      document.getElementById('fallingColor').style.display = 'block';
      setTimeout(function(){
         let html = `<div class="overMessage"><span>YOU LOST, MAYBE YOU SHOULD FIND SOMETHING MORE PRODUCTIVE TO DO?</span>
         <button id="newGameButton">PLAY AGAIN?</button></div>`   ;
         let tempContainer = document.createElement('div')
         document.querySelector('#fallingColor').appendChild(tempContainer)
         document.getElementById('newGameButton').addEventListener('click', resetGame);
      }, 3000);
   } else if (roundScoreU == nRounds) {
      document.getElementById('fallingColor').style.display = 'block';
      setTimeout(function(){
         let html = `<div class="overMessage"><span>YOU WON, WANNA PLAY AGAIN?</span>
         <button id="newGameButton">PLAY AGAIN?</button></div>`   ;
         let tempContainer = document.createElement('div')
         tempContainer.innerHTML=html
         document.querySelector('#fallingColor').appendChild(tempContainer)
         document.getElementById('newGameButton').addEventListener('click', resetGame);
      }, 3000);
   }}


function resetGame() {
   location.href = 'http://127.0.0.1:5500/welome.html';
}
