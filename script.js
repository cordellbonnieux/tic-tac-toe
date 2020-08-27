let game = (function(){
    let player = {
        score: 0,
        position: {
            "topLeft": false,
            "topCenter": false,
            "topRight": false,

            "middleLeft": false,
            "middleCenter": false,
            "middleRight": false,

            "bottomLeft": false,
            "bottomCenter": false,
            "bottomRight": false
        },
        tester: function(){
            console.log("hello");
            console.log(this);
        },
        winner: function(){
            return (this.position.topLeft == true && this.position.topCenter && this.position.topRight ||
            this.position.topLeft == true && this.position.middleCenter && this.position.bottomRight ||
            this.position.topLeft == true && this.position.middleLeft && this.position.bottomLeft ||
            this.position.bottomRight == true && this.position.bottomCenter && this.position.bottomLeft ||
            this.position.bottomLeft == true && this.position.middleCenter && this.position.topRight ||
            this.position.middleLeft == true && this.position.middleCenter && this.position.middleRight ||
            this.position.topCenter == true && this.position.middleCenter && this.position.bottomCenter 
            ? this.score++ : "");            
        }
    }
    // connect the above with the below, when player clicks a position what happens next?
    let gameBoard = {
        positionAssignment: function(){
            let topLeft = document.getElementById(topLeft);
            let topCenter = document.getElementById(topCenter);
            let topRight = document.getElementById(topRight);

            let middleLeft = document.getElementById(middleLeft);
            let middleCenter = document.getElementById(middleCenter);
            let middleRight = document.getElementById(middleRight);

            let bottomLeft = document.getElementById(bottomLeft);
            let bottomCenter = document.getElementById(bottomCenter);
            let bottomRight = document.getElementById(bottomRight);
        }
    }


    // do tests here
    return player.tester(), player.winner(), alert(player.score);

})()