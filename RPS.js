const results= document.getElementById('Results')
const possibleChoices = document.querySelectorAll('.btn')
const cScore = document.getElementById('Cscore')
const uScore = document.getElementById('Uscore')
const roundResults= document.getElementById('round-results')
const resetButton= document.getElementById('newGameButton')
const urlParams = new URLSearchParams(window.location.search);
const rounds = urlParams.get('rounds');



let userChoiceDisplay= document.querySelector('#user-choice')
let computerChoiceDisplay= document.querySelector('#computer-choice')
let computerScore = 0
let userScore= 0      
let computerChoice 
let userChoice
let outcome= '';
let nRounds= parseInt(rounds)
let roundScoreC=0
let roundScoreU=0
let tracker = document.getElementById('tracker')
let rpsDisplay = {
   Rock: "Photos/cRock.png",
   Paper: "Photos/cPaper.png",
   Scissors: "Photos/cScissors.png",
}
//get user choice//
function userO(event) {
   if (event.target === possibleChoices[0]) {
      userChoice= rpsDisplay.Rock ;
   } else if (event.target === possibleChoices[1]) {
      userChoice = rpsDisplay.Paper
   } else if (event.target === possibleChoices[2]) {
      userChoice = rpsDisplay.Scissors
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
   gameOver()
}
    //computer choices//
    function getComputerChoice(){
      const randomNumber= Math.floor(Math.random()* 3)
      if(randomNumber=== 0){
       computerChoice= rpsDisplay.Rock
      }
      if(randomNumber=== 1){
       computerChoice= rpsDisplay.Paper
      }
      if(randomNumber=== 2){
       computerChoice= rpsDisplay.Scissors
      }
      const img = document.createElement('img');
      img.src = computerChoice;
      img.style.opacity=0
      computerChoiceDisplay.appendChild(img);
      // Clear any previous content in computerChoiceDisplay
      computerChoiceDisplay.img = computerChoice;
      // Append the image element to computerChoiceDisplay
      setTimeout(() => {
       img.style.opacity = 1;
    }, 10);
    }
//results//
function getResult(){    
   if (userChoice === rpsDisplay.Rock && computerChoice===rpsDisplay.Paper) {
      computerScore++;
        outcome= 'You Lose, Paper beats Rock';
      } else if(userChoice === computerChoice){
         outcome = `It's a draw!`
      } else if (userChoice === rpsDisplay.Scissors && computerChoice===rpsDisplay.Rock){
         computerScore++;
        outcome= 'You Lose, Rock Beats Scissors';
      } else if (userChoice === rpsDisplay.Paper && computerChoice===rpsDisplay.Scissors){
         computerScore++;
        outcome= 'You Lose, Scissors beats Paper'
      } else if (computerChoice === rpsDisplay.Rock && userChoice === rpsDisplay.Paper ) {
         userScore++;
         outcome = 'You Win, Paper beats Rock'
        
      } else if (computerChoice === rpsDisplay.Paper && userChoice === rpsDisplay.Scissors) { 
         userScore++;
         outcome= 'You Win, Scissors beats Paper'
      } else if (computerChoice === rpsDisplay.Scissors&& userChoice===rpsDisplay.Rock ) {
         userScore++;
         outcome= 'You Win, Rock beats Scissors'
         
      }  
      results.innerHTML= outcome
      cScore.innerHTML= computerScore
      uScore.innerHTML= userScore
   }
///roundWinner-roundLoser (show messages)
     
function sRound() {
   if (userScore === 3) {
      roundScoreU++
         roundResults.innerHTML =`You won this round ${userScore} to ${computerScore}.`
         setTimeout(clear,4000) 
         tracker.innerHTML= `You are playing ${nRounds} rounds User: ${roundScoreU} Computer: ${roundScoreC}`
      }
   else if (computerScore === 3) {
      roundScoreC++
      console.log(roundWinner)
      roundResults.innerHTML =`You lost this round ${computerScore} to ${userScore}.`
      setTimeout(clear,4000)
      tracker.innerHTML= `You are playing ${nRounds} rounds User: ${roundScoreU} Computer: ${roundScoreC}`
     
   }
}
function clear() {
   results.innerHTML = '';
   cScore.innerHTML = '';
   uScore.innerHTML = '';
   roundResults.innerHTML= ''
   userScore = 0;
   computerScore = 0;
   userChoiceDisplay.innerHTML = '';
   computerChoiceDisplay.innerHTML = '';
}

function gameOver(){
   if (roundScoreC ==nRounds){
      console.log('loser')
   }
   else if (roundScoreU == nRounds){
      console.log('winner')
   }
}

resetButton.addEventListener('click', () => {
   location.reload();
});






 

