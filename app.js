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
    if(box.innerText != "") return;
    box.innerText = currentPlayer;
    if(currentPlayer === "O"){
        currentPlayer = "X";
    }
    else{
        currentPlayer = "O"
    }
}