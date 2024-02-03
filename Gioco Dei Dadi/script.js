// creazione numero casuale

let casualPlayer = Math.floor(Math.random() * 6) + 1;
let casualComputer = Math.floor(Math.random() * 6) + 1;

console.log(casualPlayer);
console.log(casualComputer);

// collegamento pulsante con generazione numeri casuali

document.getElementById("roll-dice").onclick = function() {
    
    casualPlayer = Math.floor(Math.random() * 6) + 1;
    casualComputer = Math.floor(Math.random() * 6) + 1;

    document.getElementById("player-dice").innerHTML = casualPlayer;
    document.getElementById("computer-dice").innerHTML = casualComputer;



    // aggiungo le condizioni vittoria, sconfitta, pareggio

    if (casualPlayer > casualComputer) {
        document.getElementById("stats").innerHTML = "You are lucky today";
        document.getElementById("stats").style.color = "#FFD700";
    } else if (casualPlayer < casualComputer) {
        document.getElementById("stats").innerHTML = "Not your best day";
        document.getElementById("stats").style.color = "#C0C0C0";
    } else {
        document.getElementById("stats").innerHTML = "Nice but not good";
        document.getElementById("stats").style.color = "#8B4513";
    }
}

