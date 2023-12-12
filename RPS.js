
const possibleChoices = document.querySelectorAll('.btn')
const userChoiceDisplay= document.getElementById('user-choice')
const computerChoiceDisplay= document.getElementById('computer-choice')
const results = document.getElementById('results')
const cScore = document.getElementById('Cscore')
const uScore = document.getElementById('Uscore')
const roundResults= document.getElementById('round-results')
const resetButton= document.getElementById('newGameButton')


let computerScore = 0
let userScore= 0      
let computerChoice
let outcome
let userChoice
let win = "You Win"
let lose = "You lose"
let roundWinner= "You won this time. Try your luck again?"
let roundLoser = 'You lost this time. Do something productive'

//button functions//
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
getComputerChoice()
getResult()
end()
}
))

    //computer choices//
function getComputerChoice(){
  const randomNumber= Math.floor(Math.random()* 3)
  if(randomNumber=== 0){
   computerChoice= 'Rock'
  }
  if(randomNumber=== 1){
   computerChoice= 'Paper'
  }
  if(randomNumber=== 2){
   computerChoice= 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
//results//
function getResult(){
        
   if (userChoice === "Rock" && computerChoice==="Paper") {
      computerScore++
        outcome= lose;
      } if(userChoice === computerChoice){
         outcome = `It's a draw!`
      } if (userChoice === "Scissors" && computerChoice==="Rock"){
         computerScore++
        outcome= lose;
      } if (userChoice === "Paper" && computerChoice==="Scissors"){
         computerScore++
        outcome= lose;
      } if (computerChoice === "Rock" && userChoice === "Paper" ) {
         userScore++
        outcome= win;
      } if (computerChoice === "Paper" && userChoice === "Scissors") { 
         userScore++
        outcome= win;
      } if (computerChoice === "Scissors" && userChoice==="Rock") {
         userScore++
         outcome= win;
      }  
      results.innerHTML= outcome
   cScore.textContent=  `Score: ${computerScore}`
   uScore.textContent=  `Score: ${userScore}`
     
   }
///roundWinner-roundLoser (show meassages)
function end(){
  
   if(userScore===5){
   roundResults.textContent += roundWinner;
   possibleChoices.disabled=true

   }
   if (computerScore===5){
   roundResults.textContent+=roundLoser
   possibleChoices.disabled=true
      }      
}


  
   resetButton.addEventListener('click',()=> 
   location.reload())






 

