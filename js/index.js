//Importing elements


const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const testtext = document.getElementById('game-configuration')
var playerOneCharacter = null
var playerTwoCharacter = null
var playerTurn = 1
var turns = 0


startgame.onclick = hideStartGame = () => {

    startgamedisplay.style.animation = "dissapearEffect 2s"
    setTimeout(disspear = () => {
        startgamedisplay.style.display = "none"
        testtext.style.animation = "appearEffect 500ms"
        testtext.style.display = "block"
    }, 300)
    
}

const xbtn = document.getElementById('X-button')
const obtn = document.getElementById('O-button')
const gameConfigurationHud = document.getElementById('game-configuration')
const gameHud = document.getElementById('game')


xbtn.onclick = selectX = () => {

    playerOneCharacter = "X"
    playerTwoCharacter = "O"
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    setTimeout(dissapear = () => {
        gameConfigurationHud.style.display = "none"
        gameHud.style.animation = "appearEffect 2s"
        gameHud.style.display = "block"
    }, 300)
    

}

obtn.onclick = selectO = () => {

    playerOneCharacter = "O"
    playerTwoCharacter = "X"
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    setTimeout(dissapear = () => {

        gameConfigurationHud.style.display = "none"
        gameHud.style.animation = "appearEffect 2s"
        gameHud.style.display = "block"
    }, 300)

}

//importing buttons

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')


btn1.onclick = play = () => {

    if (btn1.value == " ") {

        if (playerTurn == 1) {

            btn1.value = playerOneCharacter
            playerTurn++

        } else {
            btn1.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn2.onclick = play = () => {

    if (btn2.value == " ") {

        if (playerTurn == 1) {

            btn2.value = playerOneCharacter
            playerTurn++

        } else {
            btn2.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn3.onclick = play = () => {

    if (btn3.value == " ") {

        if (playerTurn == 1) {

            btn3.value = playerOneCharacter
            playerTurn++

        } else {
            btn3.value = playerTwoCharacter
            playerTurn = 1
        }
        verifyWinner()
    }
}

btn4.onclick = play = () => {

    if (btn4.value == " ") {

        if (playerTurn == 1) {

            btn4.value = playerOneCharacter
            playerTurn++

        } else {
            btn4.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn5.onclick = play = () => {

    if (btn5.value == " ") {

        if (playerTurn == 1) {

            btn5.value = playerOneCharacter
            playerTurn++

        } else {
            btn5.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn6.onclick = play = () => {

    if (btn6.value == " ") {

        if (playerTurn == 1) {

            btn6.value = playerOneCharacter
            playerTurn++

        } else {
            btn6.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn7.onclick = play = () => {

    if (btn7.value == " ") {

        if (playerTurn == 1) {

            btn7.value = playerOneCharacter
            playerTurn++

        } else {
            btn7.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn8.onclick = play = () => {

    if (btn8.value == " ") {

        if (playerTurn == 1) {

            btn8.value = playerOneCharacter
            playerTurn++

        } else {
            btn8.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

btn9.onclick = play = () => {

    if (btn9.value == " ") {

        if (playerTurn == 1) {

            btn9.value = playerOneCharacter
            playerTurn++

        } else {
            btn9.value = playerTwoCharacter
            playerTurn = 1
        }
    }
}

const verifyWinner = () => {


    if (btn1.value == playerOneCharacter && btn2.value == playerOneCharacter && btn3.value == playerOneCharacter) {

        console.log("O jogador 1 venceu !")
    }

    if (btn1.value == playerTwoCharacter && btn2.value == playerTwoCharacter && btn3.value == playerTwoCharacter) {

        console.log("O jogador 2 venceu !")
    }



}