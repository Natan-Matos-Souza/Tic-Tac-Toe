//Importing elements


const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const testtext = document.getElementById('game-configuration')
var playerOneCharacter = null
var playerTwoCharacter = null
var playerTurn = null
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

const play = () => {

    if (playerTurn = 1) {

        btn1.value = playerOneCharacter
        playerTurn = 2
    } else {
        btn1.value = playerTwoCharacter
    }

}

btn1.onclick = play

