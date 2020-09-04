// open game in private self executing function
//const game = (function(){


// tracking the number of button clicks
let buttonClicks = 0;
// player factory function
function createPlayer(name, turn){
    return {
        name,
        turn,
        computer: false,
        postScore: false,
        score:0,
        position:{
            topLeft: false,
            topCenter: false,
            topRight: false,
            middleLeft: false,
            middleCenter: false,
            middleRight: false,
            bottomLeft: false,
            bottomCenter: false,
            bottomRight: false,
        }
    }
};
// Create players --> next step is to add AI!
const player1 = createPlayer("player1", true);
const player2 = createPlayer('player2', false); // use for local & AI
// create the turn counter using the createPlayer
const turnCounter = createPlayer("turn counter", false);
// test each time a position is chosen to check for winner
function winnerTest(player){
    if (player.position.topLeft && player.position.topCenter && player.position.topRight ||
        player.position.topLeft && player.position.middleCenter && player.position.bottomRight ||
        player.position.topLeft && player.position.middleLeft && player.position.bottomLeft ||
        player.position.bottomRight && player.position.bottomCenter && player.position.bottomLeft ||
        player.position.bottomLeft && player.position.middleCenter && player.position.topRight ||
        player.position.middleLeft && player.position.middleCenter && player.position.middleRight ||
        player.position.topCenter && player.position.middleCenter && player.position.bottomCenter ||
        player.position.bottomRight && player.position.middleRight && player.position.topRight){
        player.score++;
        console.log(`---- This is right after a point is scored ( winnerTest() ) -----`);
        console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
        console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
        console.log(`player two computer: ${player2.computer}`);
        console.log(`------------------------------------------------`);
        turnCounter.postScore = true;
        scoreOne.innerHTML = player1.score;
        scoreTwo.innerHTML = player2.score;
        if (player.score >= 3){
            alert(`${player.name} wins the game!`);
            assignBoard();
            resetGame();
            promptScreenWelcome.style.display = "none";
            playAgain.style.display = "block";
            twoPlayer.style.display = "inline-block";
            onePlayer.style.display = "inline-block";
            nameInputForm.style.display = "none"
            promptWrapper.style.display = "block";
            console.log(`---- This is right after a game is won( winnerTest() -> if (playerScore >= 3) )-----`);
            console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
            console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
            console.log(`player two computer: ${player2.computer}`);
            console.log(`------------------------------------------------`);
            return
            
        } else if (player.score < 3){
            alert(`${player.name} wins the round!`);
            resetBoard();
            console.log(`---- This is right after the board is reset when a point is scored. ( winnerTest() -> if (player.score < 3) ) -----`);
            console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
            console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
            console.log(`player two computer: ${player2.computer}`);
            console.log(`------------------------------------------------`);
            return
            
        } else {
            return
        }
    } else {
        return
    }
};
// create function to call when button is clicked
let oldScore, oldScore2; // used to compare with a current score;
// 3rd attempt
function buttonClick(pos){
    let tile = pos;
    oldScore = player1.score;
    // player 1 - one player match (vs computer)
    if (player1.turn && player2.computer && turnCounter.postScore == false){
        console.log(`---- This is right after player 1 vs Computer is passed ( butonClick(pos) -> player1 vs computer) -----`);
        console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
        console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
        console.log(`player two computer: ${player2.computer}`);
        console.log(`------------------------------------------------`);
        if (tile == topLeft && turnCounter.position.topLeft == false){
            player1.position.topLeft = true;
            turnCounter.position.topLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == topCenter && turnCounter.position.topCenter == false){
            player1.position.topCenter = true;
            turnCounter.position.topCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == topRight && turnCounter.position.topRight == false){
            player1.position.topRight = true;
            turnCounter.position.topRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleLeft && turnCounter.position.middleLeft == false){
            player1.position.middleLeft = true;
            turnCounter.position.middleLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleCenter && turnCounter.position.middleCenter == false){
            player1.position.middleCenter = true;
            turnCounter.position.middleCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleRight && turnCounter.position.middleRight == false){
            player1.position.middleRight = true;
            turnCounter.position.middleRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomLeft && turnCounter.position.bottomLeft == false){
            player1.position.bottomLeft = true;
            turnCounter.position.bottomLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomCenter && turnCounter.position.bottomCenter == false){
            player1.position.bottomCenter = true;
            turnCounter.position.bottomCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomRight && turnCounter.position.bottomRight == false){
            player1.position.bottomRight = true;
            turnCounter.position.bottomRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            aiLogic();
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else {
            return
        }
    // player 1 - two player match (local)
    } else if (player1.turn && player2.computer == false && turnCounter.postScore == false){
        console.log(`---- This is right after player 1 vs player 2 local match is passed ( butonClick(pos) -> player1 vs player2 no computer) -----`);
        console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
        console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
        console.log(`player two computer: ${player2.computer}`);
        console.log(`------------------------------------------------`);
        if (tile == topLeft && turnCounter.position.topLeft == false){
            player1.position.topLeft = true;
            turnCounter.position.topLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1); // when test goes of change something?
            tieReset();
            player1.turn = false;
            player2.turn = true; // this is causing an auto choice based on the previous click when a round is won
            notifications();
            return
        } else if (tile == topCenter && turnCounter.position.topCenter == false){
            player1.position.topCenter = true;
            turnCounter.position.topCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == topRight && turnCounter.position.topRight == false){
            player1.position.topRight = true;
            turnCounter.position.topRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == middleLeft && turnCounter.position.middleLeft == false){
            player1.position.middleLeft = true;
            turnCounter.position.middleLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == middleCenter && turnCounter.position.middleCenter == false){
            player1.position.middleCenter = true;
            turnCounter.position.middleCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == middleRight && turnCounter.position.middleRight == false){
            player1.position.middleRight = true;
            turnCounter.position.middleRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == bottomLeft && turnCounter.position.bottomLeft == false){
            player1.position.bottomLeft = true;
            turnCounter.position.bottomLeft = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == bottomCenter && turnCounter.position.bottomCenter == false){
            player1.position.bottomCenter = true;
            turnCounter.position.bottomCenter = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else if (tile == bottomRight && turnCounter.position.bottomRight == false){
            player1.position.bottomRight = true;
            turnCounter.position.bottomRight = true;
            tile.innerHTML = "x";
            tile.style.color = "#78ff9a";
            winnerTest(player1);
            tieReset();
            player1.turn = false;
            player2.turn = true;
            notifications();
            return
        } else {
            return
        }
    // player 2 - human controlled
    } else if (player2.turn && player2.computer == false && oldScore === player1.score && turnCounter.postScore == false){
        console.log(`---- This is player 2's human control right after player 2 vs player 1 is passed ( butonClick(pos) -> player2 vs player 1) -----`);
        console.log(`player one: ${player1.score}, player two: ${player2.score}.`);
        console.log(`turn counter: ${turnCounter.postScore}, player one turn: ${player1.turn}, player two turn: ${player2.turn}`);
        console.log(`player two computer: ${player2.computer}`);
        console.log(`------------------------------------------------`);
        if (tile == topLeft && turnCounter.position.topLeft == false){
            player2.position.topLeft = true;
            turnCounter.position.topLeft = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == topCenter && turnCounter.position.topCenter == false){
            player2.position.topCenter = true;
            turnCounter.position.topCenter = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == topRight && turnCounter.position.topRight == false){
            player2.position.topRight = true;
            turnCounter.position.topRight = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleLeft && turnCounter.position.middleLeft == false){
            player2.position.middleLeft = true;
            turnCounter.position.middleLeft = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleCenter && turnCounter.position.middleCenter == false){
            player2.position.middleCenter = true;
            turnCounter.position.middleCenter = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == middleRight && turnCounter.position.middleRight == false){
            player2.position.middleRight = true;
            turnCounter.position.middleRight = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomLeft && turnCounter.position.bottomLeft == false){
            player2.position.bottomLeft = true;
            turnCounter.position.bottomLeft = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomCenter && turnCounter.position.bottomCenter == false){
            player2.position.bottomCenter = true;
            turnCounter.position.bottomCenter = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else if (tile == bottomRight && turnCounter.position.bottomRight == false){
            player2.position.bottomRight = true;
            turnCounter.position.bottomRight = true;
            tile.innerHTML = "o";
            tile.style.color = "#78ff9a";
            winnerTest(player2);
            tieReset();
            player2.turn = false;
            player1.turn = true;
            notifications();
            return
        } else {
            return
        }
    } else {
        return
    }
}
// AI logic
function aiLogic(){
    if (player2.computer === true && player2.turn && turnCounter.postScore == false){
        function chooseRandom(){
            function randomChoice(arr) {
                return arr[Math.floor(arr.length * Math.random())];
            };
            let compChoice = [1,2,3,4,5,6,7,8,9];
            let choice = randomChoice(compChoice);
            if (choice == 1 && turnCounter.position.topLeft == false && player2.computer == true){
                topLeft.innerHTML = "o";
                topLeft.style.color = "#78ff9a";
                player2.position.topLeft = true;
                turnCounter.position.topLeft = true;
                return
            } else if (choice == 2 && turnCounter.position.topCenter == false && player2.computer == true){
                topCenter.innerHTML = "o";
                topCenter.style.color = "#78ff9a";
                player2.position.topCenter = true;
                turnCounter.position.topCenter = true;
                return
            } else if (choice == 3 && turnCounter.position.topRight == false && player2.computer == true){
                topRight.innerHTML = "o";
                topRight.style.color = "#78ff9a";
                player2.position.topRight = true;
                turnCounter.position.topRight = true;
                return
            } else if (choice == 4 && turnCounter.position.middleLeft == false && player2.computer == true){
                middleLeft.innerHTML = "o";
                middleLeft.style.color = "#78ff9a";
                player2.position.middleLeft = true;
                turnCounter.position.middleLeft = true;
                return
            } else if (choice == 5 && turnCounter.position.middleCenter == false && player2.computer == true){
                middleCenter.innerHTML = "o";
                middleCenter.style.color = "#78ff9a";
                player2.position.middleCenter = true;
                turnCounter.position.middleCenter = true;
                return 
            } else if (choice == 6 && turnCounter.position.middleRight == false && player2.computer == true){
                middleRight.innerHTML = "o";
                middleRight.style.color = "#78ff9a";
                player2.position.middleRight = true;
                turnCounter.position.middleRight = true;
                return
            } else if (choice == 7 && turnCounter.position.bottomLeft == false && player2.computer == true){
                bottomLeft.innerHTML = "o";
                bottomLeft.style.color = "#78ff9a";
                player2.position.bottomLeft = true;
                turnCounter.position.bottomLeft = true;
                return
            } else if (choice == 8 && turnCounter.position.bottomCenter == false && player2.computer == true){
                bottomCenter.innerHTML = "o";
                bottomCenter.style.color = "#78ff9a";
                player2.position.bottomCenter = true;
                turnCounter.position.bottomCenter = true;
                return 
            } else if (choice == 9 && turnCounter.position.bottomRight == false && player2.computer == true){
                bottomRight.innerHTML = "o";
                bottomRight.style.color = "#78ff9a";
                player2.position.bottomRight = true;
                turnCounter.position.bottomRight = true;
                return  
            } else {
                return chooseRandom();
            }
        };
        return chooseRandom();
    } else { return };
};
function assignBoard(){
    // assign positions to variables 
    const topLeft = document.getElementById('topLeft');
    const topCenter = document.getElementById('topCenter');
    const topRight = document.getElementById('topRight');
    const middleLeft = document.getElementById('middleLeft');
    const middleCenter = document.getElementById('middleCenter');
    const middleRight = document.getElementById('middleRight');
    const bottomLeft = document.getElementById('bottomLeft');
    const bottomCenter = document.getElementById('bottomCenter');
    const bottomRight = document.getElementById('bottomRight');
    // Assign event listeners to position variables
    topLeft.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(topLeft);
        event.stopImmediatePropagation();
        return
    });
    topCenter.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(topCenter);
        event.stopImmediatePropagation();
        return
    });
    topRight.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(topRight);
        event.stopImmediatePropagation();
        return
    });
    middleLeft.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(middleLeft);
        event.stopImmediatePropagation();
        return
    });
    middleCenter.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(middleCenter);
        event.stopImmediatePropagation();
        return
    });
    middleRight.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(middleRight);
        event.stopImmediatePropagation();
        return
    });
    bottomLeft.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(bottomLeft);
        event.stopImmediatePropagation();
        return
    });
    bottomCenter.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(bottomCenter);
        event.stopImmediatePropagation();
        return
    });
    bottomRight.addEventListener('click', function(){
        turnCounter.postScore = false;
        buttonClick(bottomRight);
        event.stopImmediatePropagation();
        return
    });
};
assignBoard();
// Creates the prompt to ask if you will player locally or vs. AI
const promptWrapper = document.getElementById('promptWrapper');
// One Player / VS Computer
const onePlayer = document.getElementById('computer');
onePlayer.addEventListener('click', function(){
    player1Name.value = "Enter your name";
    twoPlayer.style.display = "none";
    onePlayer.style.display = "none";
    nameInputForm.style.display = "block"
    scoreKeeperTwoName.style.display = "none" // here
    player2Name.value = "Computer";
    player2.computer = true;
    assignBoard();
    resetGame();
    notifications();
    return
});
// Two players / local play
const twoPlayer = document.getElementById('local');
const nameInputForm = document.getElementById('nameInputForm');
twoPlayer.addEventListener('click', function(){
    player1Name.value = "Player One Name";
    player2Name.value = "Player Two Name";
    twoPlayer.style.display = "none";
    onePlayer.style.display = "none";
    nameInputForm.style.display = "block"
    player2.computer = false;
    assignBoard();
    resetGame();
    notifications();
    return
});
// Allows plays to enter their names
const player1Name = document.getElementById('scoreKeeperOneName');
const player2Name = document.getElementById('scoreKeeperTwoName');
const submitNames = document.getElementById('submit');
submitNames.addEventListener('click', function(){
    player1.name = player1Name.value;
    player2.name = player2Name.value;
    scoreKeeperOne.innerHTML = player1.name;
    scoreKeeperTwo.innerHTML = player2.name;
    scoreKeeperTwoName.style.display = "inline-block" // here
    promptWrapper.style.display = "none";
    resetGame();
    return
});
// Play Again? Screen
const promptScreenWelcome = document.getElementById('promptScreenWelcome');
const playAgain = document.getElementById('playAgain');
// Score Keeper
const scoreOne = document.getElementById('scoreOne');
const scoreTwo = document.getElementById('scoreTwo');
// Notification Area
const notificationArea = document.getElementById('notificationArea');
function notifications(){
    if (player1.turn == true){
        notificationArea.innerHTML = `${player1.name}'s Turn`;
    } else if (player2.turn == true){
        notificationArea.innerHTML = `${player2.name}'s Turn`;
    }
    return
};
notifications();
// Reset the board (and button)
const resetBoardButton = document.getElementById('resetBoard');
resetBoardButton.addEventListener('click', function(){return resetBoard()}); 
function resetBoard(){
    topLeft.innerHTML = "", topCenter.innerHTML = "", topRight.innerHTML = "",
    middleLeft.innerHTML = "", middleCenter.innerHTML = "", middleRight.innerHTML = "",
    bottomLeft.innerHTML = "", bottomCenter.innerHTML = "", bottomRight.innerHTML = "";
    player1.position.topLeft = false, player1.position.topCenter = false, player1.position.topRight = false,
    player1.position.middleLeft = false, player1.position.middleCenter = false, player1.position.middleRight = false,
    player1.position.bottomLeft = false, player1.position.bottomCenter = false, player1.position.bottomRight = false;
    player2.position.topLeft = false, player2.position.topCenter = false, player2.position.topRight = false,
    player2.position.middleLeft = false, player2.position.middleCenter = false, player2.position.middleRight = false,
    player2.position.bottomLeft = false, player2.position.bottomCenter = false, player2.position.bottomRight = false;
    turnCounter.position.topLeft = false, turnCounter.position.topCenter =false, turnCounter.position.topRight = false,
    turnCounter.position.middleLeft = false, turnCounter.position.middleCenter = false, turnCounter.position.middleRight = false,
    turnCounter.position.bottomLeft = false, turnCounter.position.bottomCenter = false, turnCounter.position.bottomRight = false;
    notifications();
    return
};
// Reset the game (and button)
const resetGameButton = document.getElementById('resetGame');
resetGameButton.addEventListener('click', function(){return resetGame()});
function resetGame(){
    resetBoard();
    turnCounter.postScore = false;
    player1.score = 0;
    player2.score = 0;
    scoreOne.innerHTML = player1.score;
    scoreTwo.innerHTML = player2.score;
    player1.turn = true;
    player2.turn = false;
    return
};
// reset a tie
function tieReset(){
    if (turnCounter.position.topLeft == true && turnCounter.position.topCenter == true &&
        turnCounter.position.topRight == true && turnCounter.position.middleLeft == true &&
        turnCounter.position.middleCenter == true && turnCounter.position.middleRight == true &&
        turnCounter.position.bottomLeft == true && turnCounter.position.bottomCenter == true &&
        turnCounter.position.bottomRight == true){
            alert('It\'s a tie!');
            resetBoard();
            return
        } else {
            return
        }
};




// closing brackets...
//})()