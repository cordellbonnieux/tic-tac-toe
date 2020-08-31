// open game in private self executing function
//const game = (function(){

// player factory function
function createPlayer(name, turn){
    return {
        name,
        turn,
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
const player2 = createPlayer('player2', false); // use for local & AI?
// create the turn counter using the createPlayer
const turnCounter = createPlayer("turn counter", false);
// test each time a position is chosen to check for winner
function winnerTest(player){
    if (player.position.topLeft == true && player.position.topCenter && player.position.topRight ||
        player.position.topLeft == true && player.position.middleCenter && player.position.bottomRight ||
        player.position.topLeft == true && player.position.middleLeft && player.position.bottomLeft ||
        player.position.bottomRight == true && player.position.bottomCenter && player.position.bottomLeft ||
        player.position.bottomLeft == true && player.position.middleCenter && player.position.topRight ||
        player.position.middleLeft == true && player.position.middleCenter && player.position.middleRight ||
        player.position.topCenter == true && player.position.middleCenter && player.position.bottomCenter){
            player.score++;
            if (player.score >= 3){
                alert(`${player.name} wins the game!`);
                notificationArea.innerHTML = `${player.name} wins the game!`;
                promptScreenWelcome.style.display = "none";
                playAgain.style.display = "block";
                twoPlayer.style.display = "inline-block";
                onePlayer.style.display = "inline-block";
                nameInputForm.style.display = "none"
                promptWrapper.style.display = "block";
                return assignBoard(), resetGame();
            } else if (player.score < 3){
                alert(`${player.name} wins the round!`);
                resetBoard();
            }
        }
};
// create function to call when button is clicked
function buttonClick(pos){
    let tile = pos;
    if (player1.turn == true){ 
        if (tile == topLeft && player2.position.topLeft == false && player1.position.topLeft == false){
            player1.position.topLeft = true;
            turnCounter.position.topLeft = true;
        } else if (tile == topCenter && player2.position.topCenter == false && player1.position.topCenter == false){
            player1.position.topCenter = true;
            turnCounter.position.topCenter = true;
        } else if (tile == topRight && player2.position.topRight == false && player1.position.topRight == false){
            player1.position.topRight = true;
            turnCounter.position.topRight = true;
        } else if (tile == middleLeft && player2.position.middleLeft == false && player1.position.middleLeft == false){
            player1.position.middleLeft = true;
            turnCounter.position.middleLeft = true;
        } else if (tile == middleCenter && player2.position.middleCenter == false && player1.position.middleCenter == false){
            player1.position.middleCenter = true;
            turnCounter.position.middleCenter = true;
        } else if (tile == middleRight && player2.position.middleRight == false && player1.position.middleRight == false){
            player1.position.middleRight = true;
            turnCounter.position.middleRight = true;
        } else if (tile == bottomLeft && player2.position.bottomLeft == false && player1.position.bottomLeft == false){
            player1.position.bottomLeft = true;
            turnCounter.position.bottomLeft = true;
        } else if (tile == bottomCenter && player2.position.bottomCenter == false && player1.position.bottomCenter == false){
            player1.position.bottomCenter = true;
            turnCounter.position.bottomCenter = true;
        } else if (tile == bottomRight && player2.position.bottomRight == false && player1.position.bottomRight == false){
            player1.position.bottomRight = true;
            turnCounter.position.bottomRight = true;
        } else { 
            return;
        }
        tile.innerHTML = "x";
        tile.style.color = "#78ff9a";
        player1.turn = false;
        player2.turn = true;
        winnerTest(player1);
        tieReset()
        scoreOne.innerHTML = player1.score;
        notifications();
    } else if (player2.turn == true){ 
        if (tile == topLeft && player1.position.topLeft == false && player2.position.topLeft == false){
            player2.position.topLeft = true;
            turnCounter.position.topLeft = true;
        } else if (tile == topCenter && player1.position.topCenter == false && player2.position.topCenter == false){
            player2.position.topCenter = true;
            turnCounter.position.topCenter = true;
        } else if (tile == topRight && player1.position.topRight == false && player2.position.topRight == false){
            player2.position.topRight = true;
            turnCounter.position.topRight = true;
        } else if (tile == middleLeft && player1.position.middleLeft == false && player2.position.middleLeft == false){
            player2.position.middleLeft = true;
            turnCounter.position.middleLeft = true;
        } else if (tile == middleCenter && player1.position.middleCenter == false && player2.position.middleCenter == false){
            player2.position.middleCenter = true;
            turnCounter.position.middleCenter = true;
        } else if (tile == middleRight && player1.position.middleRight == false && player2.position.middleRight == false){
            player2.position.middleRight = true;
            turnCounter.position.middleRight = true;
        } else if (tile == bottomLeft && player1.position.bottomLeft == false && player2.position.bottomLeft == false){
            player2.position.bottomLeft = true;
            turnCounter.position.bottomLeft = true;
        } else if (tile == bottomCenter && player1.position.bottomCenter == false && player2.position.bottomCenter == false){
            player2.position.bottomCenter = true;
            turnCounter.position.bottomCenter = true;
        } else if (tile == bottomRight && player1.position.bottomRight == false && player2.position.bottomRight == false){
            player2.position.bottomRight = true;
            turnCounter.position.bottomRight = true;
        } else { 
            return;
        }
        tile.innerHTML = "o";
        tile.style.color = "#78ff9a";
        player2.turn = false;
        player1.turn = true;
        winnerTest(player2);
        tieReset()
        scoreTwo.innerHTML = player2.score;
        notifications();
    } else {
        return;
    }
    return
}
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
    topLeft.addEventListener('click', function(){return buttonClick(topLeft)});
    topCenter.addEventListener('click', function(){return buttonClick(topCenter)});
    topRight.addEventListener('click', function(){return buttonClick(topRight)});
    middleLeft.addEventListener('click', function(){return buttonClick(middleLeft)});
    middleCenter.addEventListener('click', function(){return buttonClick(middleCenter)});
    middleRight.addEventListener('click', function(){return buttonClick(middleRight)});
    bottomLeft.addEventListener('click', function(){return buttonClick(bottomLeft)});
    bottomCenter.addEventListener('click', function(){return buttonClick(bottomCenter)});
    bottomRight.addEventListener('click', function(){return buttonClick(bottomRight)});
};
assignBoard();
// Creates the prompt to ask if you will player locally or vs. AI
const promptWrapper = document.getElementById('promptWrapper');
// One Player / VS Computer
const onePlayer = document.getElementById('computer');
onePlayer.addEventListener('click', function(){
    // When I build the AI, this is where I would activate it!
});
// Two players / local play
const twoPlayer = document.getElementById('local');
const nameInputForm = document.getElementById('nameInputForm');
twoPlayer.addEventListener('click', function(){
    twoPlayer.style.display = "none";
    onePlayer.style.display = "none";
    nameInputForm.style.display = "block"

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
    promptWrapper.style.display = "none";
    notifications();
})
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
    turnCounter.position.bottomLeft = false, turnCounter.position.bottomCenter = false, turnCounter.position.bottomright = false;
    notifications();
};
// Reset the game (and button)
const resetGameButton = document.getElementById('resetGame');
resetGameButton.addEventListener('click', function(){return resetGame()});
function resetGame(){
    resetBoard();
    player1.score = 0;
    player2.score = 0;
    scoreOne.innerHTML = player1.score;
    scoreTwo.innerHTML = player2.score;
    player1.turn = true;
    player2.turn = false;
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
        } else {
            return
        }
};




// closing brackets...
//})()