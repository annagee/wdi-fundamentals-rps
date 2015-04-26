////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   
    return move = move||`getInput()
}

function getComputerMove(move) {
    
    return move = move ||`randomPlay()`.
}

function getWinner(playerMove,computerMove) {
    var winner;
   
If(player === “scissors”){ if (computer  === “rock”)} return “computer wins”;}
else { if (computer === “paper”)} return “player wins”;}
else { (computer === “scissors”)} return “draw”;}

If(player === “paper”){ if( computer  === “rock”)} return “player wins”;}
else { if (computer === “paper”)} return “draw”;}
else { (computer === “scissors”)} return “computer wins”;}

If(player === “rock”){ if (computer  === “rock”)} return “draw”;}
else { if (computer === “paper”)} return “computer wins”;}
else { (computer === “scissors”)} return “player wins”;}

    return winner;}

else { return null;}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
while ( playerWins > 5 && computerWins >5)
{ playerWins = getPlayermove, 
computerWins = getComputermove;}

If ( winner === player){playerWins >1;
}
else if ( winner === computer){ computerWins>1;}
else if ( winner == tie){ tie >1}



  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');



    return [playerWins, computerWins];
}

