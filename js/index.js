//Importing elements


const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const testtext = document.getElementById('game-configuration')


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



xbtn.onclick = selectX = () => {

    var playerOneCharacter = "X"
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    setTimeout(dissapear = () => {
        gameConfigurationHud.style.display = "none"
    }, 300)
    

}

obtn.onclick = selectO = () => {

    var playerOneCharacter = "O"
    gameConfigurationHud.style.animation = "dissapearEffect 2s"
    setTimeout(dissapear = () => {

        gameConfigurationHud.style.display = "none"

    }, 300)

}