let choices =  document.querySelectorAll(".choice");
let msgBox = document.querySelector("#msg");

let userScore = 0;
let CompScore = 0;
const relation = ["rock","paper","scissor"];

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let choiceId = choice.getAttribute("id")
        let compChoice = Math.floor(Math.random()*3);
        if((choiceId === "rock" && compChoice === 2) || (choiceId === "paper" && compChoice === 0) || (choiceId === "scissor" && compChoice === 1)){
            msgBox.innerText = ` You won ${choiceId} beats ${relation[compChoice]}. `;
            msgBox.style.background = "#6BA368";
            userScore++;
        } else if(choiceId === relation[compChoice]){
            msgBox.innerText = ` The game is Drawn. Computer also choose ${choiceId}. `;
            msgBox.style.background = "#52528C";
        }
        else{
            msgBox.innerText = ` You lost ${relation[compChoice]} beats ${choiceId}. `;
            msgBox.style.background = "#D1495B";
            CompScore++;
        }
        document.querySelector("#user").innerText = userScore;
        document.querySelector("#comp").innerText = CompScore;
    })
});