greet();

/* Starting player is O and not X */
var currentPlayer = 'O'





/* I keep my functions on the bottom */

function greet(){
    alert(`Welcome to Noughts and Crosses!`);
    alert(`I know...It's just tic-tac-toe`);
    alert(`Have fun though!`);
}

function place(box){
    /* Prevents changing X/O in place */
    if(box.innerText != "") return;
    /* Switching between player(s) */
    box.innerText = currentPlayer;
    if(currentPlayer === "O"){
        currentPlayer = "X";
    }
    else{
        currentPlayer = "O"
    }
    // Shorter way to write this same if else
    /* currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O"; */
    checkGameBoard();
}

//Gamestate checker
function checkGameBoard() {
        //Check rows of board
        for(var i = 0; i <= 2; i++) {
        var first = document.getElementById("0_" + i).innerText;
        var second = document.getElementById("1_" + i).innerText;
        var third = document.getElementById("2_" + i).innerText;
        //Prevents player from winning with just three empty blocks
        if(first == "") continue;
        if(first == second && first == third) {
        alert("Winner!");
        }
    }
        //Check columns of board
        for(var i = 0; i <= 2; i++) {
        var first = document.getElementById(i + "_0").innerText;
        var second = document.getElementById(i + "_1").innerText;
        var third = document.getElementById(i + "_2").innerText;
        if(first == "") continue;
        if(first == second && first == third) {
        alert("Winner!");
        }
    }
        //Diagonal Top left to bottom right
        var firstD1 = document.getElementById("0_0").innerText;
        var secondD1 = document.getElementById("1_1").innerText;
        var thirdD1 = document.getElementById("2_2").innerText;
        if(firstD1 != "" && firstD1 == secondD1 && firstD1 ==thirdD1) {
        alert("Winner!");
    }
        //Diagonal Top right to bottom left
        var firstD2 = document.getElementById("0_2").innerText;
        var secondD2 = document.getElementById("1_1").innerText;
        var thirdD2 = document.getElementById("2_0").innerText;
        if(firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2) {
        alert("Winner!");
    }
}

function checkWinner(first, second, third){
    if(first != '' && first == second && first == third){
        alert('Winner!!!')
    }
}

