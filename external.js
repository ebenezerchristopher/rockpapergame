let choice = ["rock", "paper", "scissors"];
let matching = { rock: ["scissors"], paper: ["rock"], scissors: ["paper"] };

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);

  let computerChoice = choice[random];

  return computerChoice;
};

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  if (player === computerSelection) {
    return -1;
  }
  let computer = matching[computerSelection];
  let decision = computer.includes(player);
  if (decision) {
    return 0;
  } else {
    return 1;
  }
}

/*

 function game() {
  
  

  for (let i = 0; i < 5; i++) {
    let userInput = prompt("please make your choice");
    if (!userInput) {
      continue;
    }
    let playerSelection = userInput.toString();
    let computerSelection = getComputerChoice();

    let round = playRound(playerSelection, computerSelection);

    if (round < 0) {
      continue;
    } else if (round > 0) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }
  return `You: ${playerScore}  
          Computer: ${computerScore}`;
}

*/
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    let round = playRound(event.target.className, getComputerChoice());

    if (round === 0) {
      computerScore += 1;
      p2.textContent = `Computer Score: ${computerScore} `;
    } else if (round > 0) {
      playerScore += 1;
      p1.textContent = `Player Score: ${playerScore} `;
    }
    if (playerScore === 5) {
      alert("You  WIN");
    }
    if (computerScore === 5) {
      alert("You LOOSE");
    }
  });
}

let body = document.querySelector("body");
let div = document.createElement("div");
div.style.height = "10rem";
div.style.width = "10rem";
div.style.backgroundColor = "grey";
div.style.marginTop = "1rem";

let p1 = document.createElement("p");
let p2 = document.createElement("p");
p1.textContent = `Player Score: ${playerScore} `;
p2.textContent = `Computer Score: ${computerScore} `;

div.appendChild(p1);
div.appendChild(p2);

body.insertBefore(div, body.firstElementChild);

if (playerScore === computerScore && playerScore !== 0) {
  alert("its a tie");
}

if (playerScore === 5) {
  alert("You  WIN");
}
if (computerScore === 5) {
  alert("You LOOSE");
}
