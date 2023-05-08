//Importing elements

const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const gameConfigurationHud = document.getElementById('game-configuration')
var playerOneCharacter
var playerTwoCharacter
var playerTurn = 1
var playerClicked = false
var gameStatus
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

class Player {
    constructor(a) {
        this.playerCharacter = a
    }
    play(btn1) {
        btn1.value = this.playerCharacter
        turns++
    }
}



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
    
    playerOne = new Player(playerOneCharacter)
    playerTwo = new Player(playerTwoCharacter)

}


obtn.onclick = selectO = () => {

    playerOneCharacter = "O"
    playerTwoCharacter = "X"
    console.log(playerOneCharacter)
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    gameStatus = true
    var verifyPlayerComportamentLoop = setInterval(verifyPlayerComportament, 1000)
    setTimeout(dissapear = () => {

        gameConfigurationHud.style.display = "none"
        gameHud.style.animation = "appearEffect 2s"
        gameHud.style.display = "block"
    }, 300)

    playerOne = new Player(playerOneCharacter)
    playerTwo = new Player(playerTwoCharacter)
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

function buttonBehavior(btn1) {
    if (playerTurn == 1) {
        playerOne.play(btn1)
        playerTurn = 2
    } else {
        playerTwo.play(btn1)
        playerTurn = 1
    }
    verifyWinner()
    verifyPlayerTurn()
}

btn1.addEventListener('click', function() {
    buttonBehavior(btn1)
})

btn2.addEventListener('click', function() {
    buttonBehavior(btn2)
})

btn3.addEventListener('click', function() {
    buttonBehavior(btn3)
})

btn4.addEventListener('click', function() {
    buttonBehavior(btn4)
})

btn5.addEventListener('click', function() {
    buttonBehavior(btn5)
})

btn6.addEventListener('click', function() {
    buttonBehavior(btn6)
})

btn7.addEventListener('click', function() {
    buttonBehavior(btn7)
})

btn8.addEventListener('click', function() {
    buttonBehavior(btn8)
})

btn9.addEventListener('click', function() {
    buttonBehavior(btn9)
})

function verifyWinner() {

    function verifyGameCondition(btn1, btn2, btn3) {
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
    }

    verifyGameCondition(btn1, btn2, btn3)
    verifyGameCondition(btn4, btn5, btn6)
    verifyGameCondition(btn7, btn8, btn9)
    verifyGameCondition(btn1, btn4, btn7)
    verifyGameCondition(btn2, btn5, btn8)
    verifyGameCondition(btn3, btn6, btn9)
    verifyGameCondition(btn1, btn5, btn9)
    verifyGameCondition(btn3, btn5, btn7)

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