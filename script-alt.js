// open game in private self executing function
//const game = (function(){
// TESTING AREA
const player1 = createPlayer("player one", true);
const player2 = createPlayer('player two', false);
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
        }
};
// create function to call when button is clicked
function buttonClick(pos){
    let tile = pos;
    if (player1.turn == true){ 
        tile.innerHTML = "x";
        player1.turn = false;
        player2.turn = true;
        if (tile == topLeft){
            player1.position.topLeft = true;
        } else if (tile == topCenter){
            player1.position.topCenter = true;
        } else if (tile == topRight){
            player1.position.topRight = true;
        } else if (tile == middleLeft){
            player1.position.middleLeft = true;
        } else if (tile == middleCenter){
            player1.position.middleCenter = true;
        } else if (tile == middleRight){
            player1.position.middleRight = true;
        } else if (tile == bottomLeft){
            player1.position.bottomLeft = true;
        } else if (tile == bottomCenter){
            player1.position.bottomCenter = true;
        } else if (tile == bottomRight){
            player1.position.bottomRight = true;
        } else { 
            return;
        }
        winnerTest(player1);
    } else if (player2.turn == true){ 
        tile.innerHTML = "o";
        player2.turn = false;
        player1.turn = true;
        if (tile == topLeft){
            player2.position.topLeft = true;
        } else if (tile == topCenter){
            player2.position.topCenter = true;
        } else if (tile == topRight){
            player2.position.topRight = true;
        } else if (tile == middleLeft){
            player2.position.middleLeft = true;
        } else if (tile == middleCenter){
            player2.position.middleCenter = true;
        } else if (tile == middleRight){
            player2.position.middleRight = true;
        } else if (tile == bottomLeft){
            player2.position.bottomLeft = true;
        } else if (tile == bottomCenter){
            player2.position.bottomCenter = true;
        } else if (tile == bottomRight){
            player2.position.bottomRight = true;
        } else { 
            return;
        }
        winnerTest(player2);
    } else {
        return;
    }
    return
}
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
// Creates the prompt to ask if you will player locally or vs. AI 


// closing brackets...
//})()