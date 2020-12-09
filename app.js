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

//Faire que le joueur 1 joue avec le clique gauche de la souris et qu'un cerlce bleu apparaisse la où il a cliqué.
// Aussi faire que le joueur 2 joue avec le clique droit de la souris et q'un cerlce rouge apparaisse là où il a cliqué.
let allDiv = document.querySelectorAll('.case1, .case2, .case3');
for (let i = 0; i < allDiv.length; i++) {
    allDiv.item(i).addEventListener("mouseup", function (event) {
        switch(event.button) {
            case 0: //Clique gauche
                playerOneClick(allDiv.item(i)); // reviens à --> this.
                break;
            case 2: //Clique droit
                playerTwoClick(this);
                break;
        }
        let winner = verificationVerticale();
        if(winner !== false) {
            alert(winner);
        }
        else { // fonctionne pas correctement !!!!!!!!!!!!!!!!
            verificationHorizontale();
            verificationDiagonale();
            console.log("horizontale ou diagonale")
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
    let case1 = document.getElementsByClassName("case1");
    let player1Count = 0;
    let player2Count = 0;

    // Ligne 1 horizontale
    for (let i = 0; i < case1.length; i++) {
        let elementsP1 = case1.item(i).getElementsByTagName("p");
        if (elementsP1.length > 0) {
            if(elementsP1.item(0).style.backgroundColor === bgPlayer1 ) {
                player1Count++;
                console.log("J'ai cliquer sur une case1");
            }
            else if (elementsP1.item(0).style.backgroundColor === bgPlayer2) {
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

    let case2 = document.getElementsByClassName("case2");
    player1Count = 0;
    player2Count = 0;

    // Ligne 2 horizontale
    for (let i = 0; i < case2.length; i++) {
        let elementsP2 = case2.item(i).getElementsByTagName("p");
        if (elementsP2.length > 0) {
            if(elementsP2.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP2.item(0).style.backgroundColor === bgPlayer2) {
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

    let case3 = document.getElementsByClassName("case3");
    player1Count = 0;
    player2Count = 0;

    // Ligne 3 horizontale
    for (let i = 0; i < case3.length; i++) {
        let elementsP3 = case3.item(i).getElementsByTagName("p");
        if (elementsP3.length > 0) {
            if(elementsP3.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP3.item(0).style.backgroundColor === bgPlayer2) {
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



// Et en fin on teste les lignes diagonales.
function verificationDiagonale() {

    //Diagonale de gauche-haut à bas-droite.
    let caseLigne1 = ligne1.getElementsByClassName("case1");
    let caseLigne2 = ligne2.getElementsByClassName("case2");
    let caseLigne3 = ligne3.getElementsByClassName("case3");
    let player1Count = 0;
    let player2Count = 0;

    // 1 ère diagonale.
    for (let i = 0; i < caseLigne1.length && i < caseLigne2.length && i < caseLigne3.length; i++) {
        let elementsP1 = caseLigne1.item(i).getElementsByTagName("p");
        let elementsP2 = caseLigne2.item(i).getElementsByTagName("p");
        let elementsP3 = caseLigne3.item(i).getElementsByTagName("p");
        if (elementsP1.length > 0 && elementsP2.length > 0 && elementsP3.length > 0) {
            if(elementsP1.item(0).style.backgroundColor === bgPlayer1 && elementsP2.item(0).style.backgroundColor === bgPlayer1 && elementsP3.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP1.item(0).style.backgroundColor === bgPlayer2 && elementsP2.item(0).style.backgroundColor === bgPlayer2 && elementsP3.item(0).style.backgroundColor === bgPlayer2) {
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

    //Diagonale de bas-gauche à haut-droite.
    let case3Ligne1 = ligne1.getElementsByClassName("case3");
    let case2Ligne2 = ligne2.getElementsByClassName("case2");
    let case1Ligne3 = ligne3.getElementsByClassName("case1");
    player1Count = 0;
    player2Count = 0;

    // 2è diagonale
    for (let i = 0; i < case3Ligne1.length && i < case2Ligne2.length && i < case1Ligne3.length; i++) {
        let elementsP1 = case3Ligne1.item(i).getElementsByTagName("p");
        let elementsP2 = case2Ligne2.item(i).getElementsByTagName("p");
        let elementsP3 = case1Ligne3.item(i).getElementsByTagName("p");
        if (elementsP1.length > 0 && elementsP2.length > 0 && elementsP3.length > 0) {
            if(elementsP1.item(0).style.backgroundColor === bgPlayer1 && elementsP2.item(0).style.backgroundColor === bgPlayer1 && elementsP3.item(0).style.backgroundColor === bgPlayer1) {
                player1Count++;
            }
            else if (elementsP1.item(0).style.backgroundColor === bgPlayer2 && elementsP2.item(0).style.backgroundColor === bgPlayer2 && elementsP3.item(0).style.backgroundColor === bgPlayer2) {
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
