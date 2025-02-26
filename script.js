


function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];

}



function getHumanchoice(){

    let choice = prompt("Enter Your Choice: ");

    if (choice == null){
        alert("you have cancelled");
        return null;
        
    }


    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if (choice === "Rock" || choice === "Paper" || choice === "Scissors"){
        return choice;
    }
    else{
        return getHumanchoice();
    }
    
}





function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice){
        return "Tie";
    }
    
    else if(
        (humanChoice == "Rock" && computerChoice == "Scissors")||
         (humanChoice == "Paper" && computerChoice == "Rock")||
         (humanChoice == "Scissors" && computerChoice == "Paper")
    ){
        return "Win";
    
    }
     
    else {
        return "Lose";
        
    }

    

}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

   for(let round = 1; round <=5; round++){
     console.log(`Round: ${round}`);
    
    


const humanSelection = getHumanchoice();
if(humanSelection == null){
    return "Game Cancelled";
 }


const computerSelection = getComputerChoice();




console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);

let result = playRound(humanSelection, computerSelection);

if (result == "Win"){
    humanScore++;
    console.log("You Win This Round");
} 
else if (result == "Lose") {
    computerScore++;
    console.log("You Lost This Round");
}
else {
    console.log("It's a Tie!");
}

console.log(`Round ${round} Score: \n You :- ${humanScore} \n Computer :- ${computerScore}`);
}

console.log(`\n FINAL SCORE🏆 \n You:- ${humanScore} \n Computer:- ${computerScore}`);
if(humanScore > computerScore){
    return " Yay!!🎉🎉 You are the Overall Winner";
}
else if(computerScore > humanScore){
    return "😢 Tough match! The computer wins this time. Try again Fren!";
}
else{
    return "This Was a Strong Match! It's a Tie.";
}

}

console.log(playGame());