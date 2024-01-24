let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComputerChoice=()=>{
    let options = ["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissors
}

const drawGame=()=>{
    msg.innerText = `Draw! Play Again!!!`;
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
//generate computer choice -> modular way of coding
const compChoice = genComputerChoice();
if(userChoice === compChoice){
    //draw game
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //paper,scissors
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        //scissors,rock
        userWin = compChoice === "scissors"? false : true;
    } else {
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})