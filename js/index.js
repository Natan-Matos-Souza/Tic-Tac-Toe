//Importing elements

const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const gameConfigurationHud = document.getElementById('game-configuration')
var playerOneCharacter = null
var playerTwoCharacter = null
var playerTurn = 1
var playerClicked = false
var gameStatus = null
var turns = 0
var verifyPlayerComportamentLoop = null

startgame.onclick = hideStartGame = () => {

    startgamedisplay.style.animation = "dissapearEffect 2s"
    setTimeout(disspear = () => {
        startgamedisplay.style.display = "none"
        gameConfigurationHud.style.animation = "appearEffect 500ms"
        gameConfigurationHud.style.display = "block"
    }, 300)
    
}

const xbtn = document.getElementById('X-button')
const obtn = document.getElementById('O-button')
const gameHud = document.getElementById('game')


xbtn.onclick = selectX = () => {

    playerOneCharacter = "X"
    playerTwoCharacter = "O"
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    gameStatus = true
    
    var verifyPlayerComportamentLoop = setInterval(verifyPlayerComportament, 5000)
    
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
    gameStatus = true
    var verifyPlayerComportamentLoop = setInterval(verifyPlayerComportament, 1000)
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


const verifyPlayerComportament = () => {

    setTimeout(verifyPlayer = () => {

        if (playerClicked == false) {

            document.getElementById('player-alert-h1').innerHTML = "Click inside the square to start the game"
        } else {
            document.getElementById('player-alert-h1').innerHTML = ""
        }

    }, 1000)



}

const verifyPlayerTurn = () => {

    if (playerTurn == 1) {

        document.getElementById('game-text-h1').innerHTML = `Player One` 

    } else {

        document.getElementById('game-text-h1').innerHTML = "Player Two"

    }

}

btn1.onclick = play = () => {

    if (btn1.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn1.value = playerOneCharacter
            playerTurn++

        } else {
            btn1.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        playerClicked = true
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn2.onclick = play = () => {

    if (btn2.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn2.value = playerOneCharacter
            playerTurn++

        } else {
            btn2.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        playerClicked = true
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn3.onclick = play = () => {

    if (btn3.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn3.value = playerOneCharacter
            playerTurn++

        } else {
            btn3.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        playerClicked = true
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn4.onclick = play = () => {

    if (btn4.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn4.value = playerOneCharacter
            playerTurn++

        } else {
            btn4.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn5.onclick = play = () => {

    if (btn5.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn5.value = playerOneCharacter
            playerTurn++

        } else {
            btn5.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn6.onclick = play = () => {

    if (btn6.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn6.value = playerOneCharacter
            playerTurn++

        } else {
            btn6.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn7.onclick = play = () => {

    if (btn7.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn7.value = playerOneCharacter
            playerTurn++

        } else {
            btn7.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn8.onclick = play = () => {

    if (btn8.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn8.value = playerOneCharacter
            playerTurn++

        } else {
            btn8.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

btn9.onclick = play = () => {

    if (btn9.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btn9.value = playerOneCharacter
            playerTurn++

        } else {
            btn9.value = playerTwoCharacter
            playerTurn = 1
        }
        turns++
        verifyPlayerTurn()
        verifyWinner()
    }
}

const verifyWinner = () => {
    
    const playerAlert = document.getElementById('game-text-h1') 

    if (btn1.value == playerOneCharacter && btn2.value == playerOneCharacter && btn3.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"
    }

    if (btn1.value == playerTwoCharacter && btn2.value == playerTwoCharacter && btn3.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"
        
    }

    if (btn4.value == playerOneCharacter && btn5.value == playerOneCharacter && btn6.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"
    }

    if (btn4.value == playerTwoCharacter && btn5.value == playerTwoCharacter && btn6.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"
    }

    if (btn7.value == playerOneCharacter && btn8.value == playerOneCharacter && btn9.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"
    }
    
    if (btn7.value == playerTwoCharacter && btn8.value == playerTwoCharacter && btn9.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"
    }
    
    if (btn1.value == playerOneCharacter && btn5.value == playerOneCharacter && btn9.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"

    }

    if (btn1.value == playerTwoCharacter && btn5.value == playerTwoCharacter && btn9.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"

    }

    if (btn3.value == playerOneCharacter && btn5.value == playerOneCharacter && btn7.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"

    }

    if (btn3.value == playerTwoCharacter && btn5.value == playerTwoCharacter && btn7.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"

    }

    if (btn1.value == playerOneCharacter && btn4.value == playerOneCharacter && btn7.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"

    }

    if (btn1.value == playerTwoCharacter && btn4.value == playerTwoCharacter && btn7.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"

    }

    if (btn2.value == playerOneCharacter && btn5.value == playerOneCharacter && btn8.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"

    }

    if (btn2.value == playerTwoCharacter && btn5.value == playerTwoCharacter && btn8.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"

    }

    if (btn3.value == playerOneCharacter && btn6.value == playerOneCharacter && btn9.value == playerOneCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player One wins !"

    }

    if (btn3.value == playerTwoCharacter && btn6.value == playerTwoCharacter && btn9.value == playerTwoCharacter) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Player Two wins !"

    }

    if (turns >= 9 && gameStatus == true) {
        showEndGameHud()
        gameStatus = false
        playerAlert.innerHTML = "Draw !"


    }
}

const endGameHud = document.getElementById('end-game-btns')
const menuBtn = document.getElementById('menu-btn')
const restartBtn = document.getElementById('restart-btn')

const showEndGameHud = () => {

    endGameHud.style.animation = "appearEffect 500ms"
    endGameHud.style.display = "block"


}


const restartGame = () => {
    playerTurn = 1
    turns = 0
    gameStatus = true
    verifyPlayerTurn()
    document.getElementById('player-alert-h1').innerHTML = "Click inside the square to start the game"
    btn1.value = " "
    btn2.value = " "
    btn3.value = " "
    btn4.value = " "
    btn5.value = " "
    btn6.value = " "
    btn7.value = " "
    btn8.value = " "
    btn9.value = " "
    endGameHud.style.animation = "dissapearEffect 2s"
    setTimeout(disspear = () => {
        endGameHud.style.display = "none"
    }, 300)
}

restartBtn.onclick = restartGame

menuBtn.onclick = backToMenu = () => {
    restartGame()
    gameHud.style.animation = "dissapearEffect 2s"
    endGameHud.style.animation = "dissapearEffect 2s"
    
    setTimeout(dissapear = () => {
        gameHud.style.display = "none"
        endGameHud.style.display = "none"
        gameConfigurationHud.style.animation = "appearEffect 2s"
        gameConfigurationHud.style.display = "block"
    }, 300 )
    
}