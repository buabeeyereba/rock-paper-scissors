

const resultDiv = document.getElementById("result");

const scoreDiv = document.getElementById("score");

const tagLine = document.getElementById("tag");




let playerScore = 0;
let computerScore = 0;
let round = 1;


function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];

}




function playGame(humanSelection){
    tagLine.style.display = "none";

    if (round > 5) {
        
        return
    }


const computerSelection = getComputerChoice();







resultDiv.innerHTML = `You chose: ${humanSelection} <br>  Computer chose: ${computerSelection}`;

let result = "";


    
    if (humanSelection === computerSelection){
        result = "it's a Tie";
    }
    
    else if(
        (humanSelection== "Rock" && computerSelection == "Scissors")||
         (humanSelection == "Paper" && computerSelection == "Rock")||
         (humanSelection == "Scissors" && computerSelection == "Paper")
    ){
        result = " you Win";
        playerScore++;
    
    }
     
    else {
        result = " you Lose";
        computerScore++;
        
    }

    
    resultDiv.innerHTML = `
        <strong>Round ${round}</strong><br>
        You chose: ${humanSelection} <br>
        Computer chose: ${computerSelection} <br>
        ${result}
    `;

   
        scoreDiv.innerHTML = `
    <div style="text-align: center; font-size: 50px;">
        Score<br>
        You: ${playerScore} | Computer: ${computerScore}
    </div>
`;

    

    if (round === 5) {
        let finalResult = "";

        if (playerScore > computerScore) {
            finalResult = "🎉 You won the game!";
        } else if (playerScore < computerScore) {
            finalResult = "😞 You lost the game!";
        } else {
            finalResult = "🤝 It's a tie!";
        }

        resultDiv.innerHTML += `<br><br><strong>${finalResult}</strong><br> Game over`;
       
    }

    round++;
}





document.getElementById("rockChoice").addEventListener('click', function(){
    playGame("Rock");
   
   

}
)
document.getElementById("paperChoice").addEventListener('click', function(){
    playGame("Paper");

}
)
document.getElementById("scissorsChoice").addEventListener('click', function(){
    playGame("Scissors");

}
)
