greet();

/* Starting player is O and not X */
var currentPlayer = 'O'
var won = false;




/* I keep my functions on the bottom */

function greet(){
    alert(`Welcome to Noughts and Crosses!`);
    alert(`I know...It's just tic-tac-toe`);
    alert(`Have fun though!`);
}

function place(box){
    /* Prevents changing X/O in place */
    if(box.innerText != "" || won) return;
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
    for(var i = 0; i <= 2; i++) {
        checkWinner(document.getElementById(i + "_0").innerText,
        document.getElementById(i + "_1").innerText,
        document.getElementById(i + "_2").innerText);
        checkWinner(document.getElementById("0_" + i).innerText,
        document.getElementById("1_" + i).innerText,
        document.getElementById("2_" + i).innerText);
    }
        checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
        checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
}
    
function checkWinner(first, second, third) {
    if(first != "" && first == second && first == third) {
    alert("Winner!!!!");
    won = true;
    }
}

