function createPlayer(name){
    return {
        name,
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
}
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
}
const testPlayer = createPlayer("john dicks");
testPlayer.position.middleCenter = true;
testPlayer.position.topCenter = true;
testPlayer.position.bottomCenter = true;