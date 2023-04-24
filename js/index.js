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
    verifyPlayerComportamentLoop = setInterval(verifyPlayerComportament, 1000)
    setTimeout(dissapear = () => {

        gameConfigurationHud.style.display = "none"
        gameHud.style.animation = "appearEffect 2s"
        gameHud.style.display = "block"
    }, 300)

}

//importing buttons

const btnTopLeft = document.getElementById('btn1')
const btnTopMiddle = document.getElementById('btn2')
const btnTopRight = document.getElementById('btn3')
const btnMiddleLeft = document.getElementById('btn4')
const btnMiddleCenter = document.getElementById('btn5')
const btnMiddleRight = document.getElementById('btn6')
const btnBottomLeft = document.getElementById('btn7')
const btnBottomMiddle = document.getElementById('btn8')
const btnBottomRight = document.getElementById('btn9')

function playerComputer() {
    var freeButtons = []

    function verifyFreeButtons(btnTopLeft) {

        if (btnTopLeft.value == " " && gameStatus == true)
        freeButtons.push(btnTopLeft)
    }
    
     if (btnTopMiddle.value == playerOneCharacter && btnTopRight.value == playerOneCharacter || btnBottomLeft.value == playerOneCharacter && btnMiddleLeft.value == playerOneCharacter || btnBottomRight.value == playerOneCharacter && btnMiddleCenter.value == playerOneCharacter) {

        if (btnTopLeft.value == " ") {
            btnTopLeft.value = playerTwoCharacter
        }
    }

    else if (btnTopLeft.value == playerOneCharacter && btnTopRight.value == playerOneCharacter || btnMiddleCenter.value == playerOneCharacter && btnBottomMiddle.value == playerOneCharacter) {

        if (btnTopMiddle.value == " ") {

            btnTopMiddle.value = playerTwoCharacter

        }
    }

    else if (btnTopLeft.value == playerOneCharacter && btnTopMiddle.value == playerOneCharacter || btnMiddleRight.value == playerOneCharacter && btnBottomRight.value == playerOneCharacter || btnBottomLeft.value == playerOneCharacter && btnMiddleCenter.value == playerOneCharacter) {

        if (btnTopRight.value == " ") {

            btnTopRight.value = playerTwoCharacter
        }

    } 
    
    else {

    verifyFreeButtons(btnTopLeft)
    verifyFreeButtons(btnTopMiddle)
    verifyFreeButtons(btnTopRight)
    verifyFreeButtons(btnMiddleLeft)
    verifyFreeButtons(btnMiddleCenter)
    verifyFreeButtons(btnMiddleRight)
    verifyFreeButtons(btnBottomLeft)
    verifyFreeButtons(btnBottomMiddle)
    verifyFreeButtons(btnBottomRight)
    console.log(freeButtons)
    console.log(freeButtons.length)
    const arrayLenght = freeButtons.length++
    const randButton = Math.floor(Math.random() * arrayLenght)
    freeButtons[randButton].value = playerTwoCharacter
    }
}


function buttonComportament(btnTopLeft){

    if (btnTopLeft.value == " " && gameStatus == true) {

        if (playerTurn == 1) {

            btnTopLeft.value = playerOneCharacter
            verifyWinner()
            playerComputer()
        }
        playerClicked = true
        verifyPlayerTurn()
        console.log(btnTopLeft)
        console.log(`playerTurn: ${playerTurn}`)
        console.log(`turns : ${turns}`)
    }
} 

btnTopLeft.addEventListener("click", function() {
    buttonComportament(btnTopLeft)
})

btnTopMiddle.addEventListener("click", function() {
    buttonComportament(btnTopMiddle)
})

btnTopRight.addEventListener("click", function() {
    buttonComportament(btnTopRight)
})

btnMiddleLeft.addEventListener("click", function() {
    buttonComportament(btnMiddleLeft)
})

btnMiddleCenter.addEventListener("click", function() {
    buttonComportament(btnMiddleCenter)
})

btnMiddleRight.addEventListener("click", function() {
    buttonComportament(btnMiddleRight)
})

btnBottomLeft.addEventListener("click", function() {
    buttonComportament(btnBottomLeft)
})

btnBottomMiddle.addEventListener("click", function() {
    buttonComportament(btnBottomMiddle)
    })

btnBottomRight.addEventListener("click", function() {
    buttonComportament(btnBottomRight)
})


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