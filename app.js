let morpion = document.getElementById('morpion');
let ligne1 = document.getElementById("ligne1");
let ligne2 = document.getElementById("ligne2");
let ligne3 = document.getElementById("ligne3");
let bgPlayer1 = "rgb(38, 150, 227)";
let bgPlayer2 = "rgb(254, 22, 22)";

// Empêche de faire apparaître le menu contextuel !
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
})

let allDiv = document.querySelectorAll('.case1, .case2, .case3');
for (let i = 0; i < allDiv.length; i++) {
    allDiv.item(i).addEventListener("mouseup", function (event) {
        switch(event.button) {
            case 0:
                playerOneClick(allDiv.item(i));
                break;
            case 2:
                playerTwoClick(this);
                break;
        }
        let winner = verificationVerticale();
        if(winner !== false) {
            alert(winner);
        }
        else {
            verificationHorizontale();
            verificationDiagonale();
        }

    })
}


/**
 * Crée un élément avec le bon fond lorsque le joueur 1 utilise le clic gauche.
 */
function playerOneClick(parent) { // parent = this = élément sur lequel on vient de clic.
    if(parent.children.length === 0) {
        let circleBlue = document.createElement('p');
        circleBlue.style.backgroundColor = bgPlayer1;
        circleBlue.style.height = "70px";
        circleBlue.style.width = "70px";
        circleBlue.style.borderRadius = "70px";
        parent.append(circleBlue);
    }
}

/**
 * Crée un élément avec le bon fond lorsque le joueur 2 utilise le clic droit.
 */
function playerTwoClick(parent) {
    if(parent.children.length === 0) {
        let circleRed = document.createElement('p');
        circleRed.style.backgroundColor = bgPlayer2;
        circleRed.style.height = "70px";
        circleRed.style.width = "70px";
        circleRed.style.borderRadius = "70px";
        parent.append(circleRed);
    }
}

// D'abord on teste les lignes verticales.
function verificationVerticale() {
    let casesLigne1 = ligne1.getElementsByTagName('div');
    let player1Count = 0;
    let player2Count = 0;

    // Ligne 1 verticale
    for(let i = 0; i < casesLigne1.length; i++) {
        let elementsP = casesLigne1.item(i).getElementsByTagName('p');
        if(elementsP.length > 0) {
            if (elementsP.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP.item(0).style.backgroundColor === bgPlayer2) {
                player2Count++;
            }
            // Ensuite, on vérifie si un des deux dispose de 3 cases.
            if (player1Count === 3) {
                return "Gagnant: joueur 1";
            }
            else if (player2Count === 3) {
                return "Gagnant: joueur 2";
            }
        }
    }

    //Ligne 2 verticale
    let casesLigne2 = ligne2.getElementsByTagName('div');
    player1Count = 0;
    player2Count = 0;

    for (let i = 0; i < casesLigne2.length; i++) {
        let elementsP = casesLigne2.item(i).getElementsByTagName("p");
        if(elementsP.length > 0) {
            if(elementsP.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP.item(0).style.backgroundColor === bgPlayer2) {
                player2Count++;
            }
            if(player1Count === 3) {
                return "Gagnant: joueur 1"; //Sort de la fonction si joueur 1 a gagné
            }
            else if (player2Count === 3) {
                return "Gagnant: joueur 2";
            }
        }
    }

    //Ligne 3 verticale
    let caseLigne3 = ligne3.getElementsByTagName("div");
    player1Count = 0;
    player2Count = 0;

    for (let i = 0; i < caseLigne3.length; i++) {
        let elementsP = caseLigne3.item(i).getElementsByTagName("p");
        if (elementsP.length > 0) {
            if(elementsP.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP.item(0).style.backgroundColor === bgPlayer2) {
                player2Count++;
            }
            if (player1Count === 3) {
                return "Gagnant: joueur 1";
            }
            else if (player2Count === 3) {
                return "Gagnant: joueur 2";
            }
        }
    }
    return false;
}

// Ensuite on teste les lignes horizontales.
function verificationHorizontale() {

}


// Et en fin on teste les lignes diagonales.
function verificationDiagonale() {

}
