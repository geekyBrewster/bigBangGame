var userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
var userSelectionBox = document.getElementById("userSelection");
var computerSelectionBox = document.getElementById("computerSelection");
var verdict = document.getElementById("verdict");
var computerSelection = 0;

//Determine computer's selection
var randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

switch (randomNum) {
	case 1:
	computerSelection = "rock";
	computerSelectionBox.innerHTML = "<img src='images/rock.png' />";
	console.log("Computer chooses: " + computerSelection);
	break;
	case 2:
	computerSelection = "paper";
	computerSelectionBox.innerHTML = "<img src='images/paper.jpg' />";
	console.log("Computer chooses: " + computerSelection);
	break;
	case 3:
	computerSelection = "scissors";
	computerSelectionBox.innerHTML = "<img src='images/scissors.png' />";
	console.log("Computer chooses: " + computerSelection);
	break;
	case 4:
	computerSelection = "lizard";
	computerSelectionBox.innerHTML = "<img src='images/lizard.jpg' />";
	console.log("Computer chooses: " + computerSelection);
	break;
	default:
	computerSelection = "Spock";
	computerSelectionBox.innerHTML = "<img src='images/spock.jpg' />";
	console.log("Computer chooses: " + computerSelection);
}

switch (userChoice) {
    case 'rock':
	console.log("User chooses: " + userChoice);
	userSelectionBox.innerHTML = "<img src='images/rock.png' />";
	break;
    case 'paper':
	console.log(userChoice);
	userSelectionBox.innerHTML = "<img src='images/paper.jpg' />";
	break;
    case 'scissors':
	console.log(userChoice);
	userSelectionBox.innerHTML = "<img src='images/scissors.png' />";
	break;
	case 'lizard':
	console.log(userChoice);
	userSelectionBox.innerHTML = "<img src='images/lizard.jpg' />";
	break;
	case 'Spock':
	console.log(userChoice);
	userSelectionBox.innerHTML = "<img src='images/spock.jpg' />";
	break;
    default:
	alert("Incorrect choice. Please choose again.");
	userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
	break;
}

//Comparison of choices

var result = compare(userChoice, computerSelection);
var resultText = document.querySelector("span");
console.log("Who wins: " + result);
resultText.textContent = result;



function compare(choice1, choice2){
	if(choice1 === choice2){
		return("You tied the computer! Play again?")
	} else if (choice1 === 'rock') {
		if(choice2 === 'paper'){
			return("Paper wins!");
		} else if (choice2 === 'scissors'){
			return("Rock wins!");
		} else if(choice2 === 'lizard'){
			return("Rock wins!");
		} else if(choice2 === 'Spock'){
			return("Spock wins!");
		}
	} else if (choice1 === 'paper') {
		if(choice2 === 'rock'){
			return("Rock wins!");
		} else if (choice2 === 'scissors'){
			return("Scissors wins!");
		} else if(choice2 === 'lizard'){
			return("Lizard wins!");
		} else if(choice2 === 'Spock'){
			return("Paper wins!");
		}
	} else if (choice1 === 'scissors') {
		if(choice2 === 'rock'){
			return("Rock wins!");
		} else if (choice2 === 'paper'){
			return("Scissors wins!");
		} else if(choice2 === 'lizard'){
			return("Scissors wins!");
		} else if(choice2 === 'Spock'){
			return("Spock wins!");
		}
	} else if (choice1 === 'lizard') {
		if(choice2 === 'rock'){
			return("Rock wins!");
		} else if (choice2 === 'paper'){
			return("Lizard wins!");
		} else if(choice2 === 'scissors'){
			return("Scissors wins!");
		} else if(choice2 === 'Spock'){
			return("Lizard wins!");
		}
	} else {
		if(choice2 === 'rock'){
			return("Spock wins!");
		} else if (choice2 === 'paper'){
			return("Paper wins!");
		} else if(choice2 === 'scissors'){
			return("Spock wins!");
		} else if(choice2 === 'lizard'){
			return("Lizard wins!");
		}
	}
}

