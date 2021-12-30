
let playerScore = 0
let computerScore = 0


function computerPlay(){
compNbr = Math.floor(Math.random() * 3);
if (compNbr == 0){
return("rock");
} else if (compNbr == 1){
return("paper");
} else if (compNbr == 2){
return("scissor");
}
}



function playRound(playerSelection){
  let computerSelection = computerPlay()

    playerSelection = prompt("Rock , Paper or Scissor");

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
      return("its a tie - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "scissor") {
      return("its a tie - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
      return("its a tie - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
      playerScore += 1
      return("You win - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      playerScore += 1
      return("You win - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
      playerScore += 1
      return("You win - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }

    if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
      computerScore += 1
      return("You lose - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
      computerScore += 1
      return("You lose - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
      computerScore += 1
      return("You lose - You played " + playerSelection.toLowerCase() + " and pc played " + computerSelection);
    }
  }


function game(){

  for (i = 0; i < 5; i++){
    console.log(playRound());
    console.log("your score = " + playerScore + " pc score = " + computerScore);
}
}

game()
// console.log(playRound());
// console.log("your score = " + playerScore + " pc score = " + computerScore);
// console.log(playRound());
// console.log("your score = " + playerScore + " pc score = " + computerScore);
// console.log(playRound());
// console.log("your score = " + playerScore + " pc score = " + computerScore);
// console.log(playRound());
// console.log("your score = " + playerScore + " pc score = " + computerScore);
