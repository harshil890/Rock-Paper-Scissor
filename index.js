
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let resultText = document.getElementById('resultText');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
var i = 0
var y = 0
function logic(op){
    let player = op;
    let arr = ["Scissor","Rock","Paper"];
    let computer = arr[Math.floor(Math.random()* 3)];
    if(player == computer){
        resultText.innerHTML = "It was a draw."
    }
    else if(player == "Scissor" && computer == "Rock"){
        y++;
        computerScore.innerHTML = y
        resultText.innerHTML = "Oops computer has won"
    }
    else if(player == "Scissor" && computer == "Paper"){
        i++;
        playerScore.innerHTML = i;
        resultText.innerHTML = "yoo you won"
    }
    else if(player == "Rock" && computer == "Scissor"){
       i++;
       playerScore.innerHTML = i;
        resultText.innerHTML = "yoo you won"
    }
    else if(player == "Rock" && computer == "Paper"){
        y++;
        computerScore.innerHTML = y;
        resultText.innerHTML = "Oops computer has won"
}
    else if(player == "Paper" && computer == "Rock"){
        i++;
        playerScore.innerHTML = i;
        resultText.innerHTML = "yoo you won"
    }
    else if(player == "Paper" && computer == "Scissor"){
        y++;
        computerScore.innerHTML = y;
        resultText.innerHTML = "Oops computer has won"
    };
};
rock.addEventListener("click", function(){logic("Rock")});
scissor.addEventListener("click", function(){logic("Scissor")});
paper.addEventListener("click", function(){logic("Paper")});




