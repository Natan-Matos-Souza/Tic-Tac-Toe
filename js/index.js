//Importing elements


const startgame = document.getElementById("start-game-btn")
const startgamedisplay = document.getElementById("start-game")
const testtext = document.getElementById('game-configuration')


startgame.onclick = hideStartGame = () => {

    startgamedisplay.style.animation = "dissapearEffect 2s"
    setTimeout(disspear = () => {
        startgamedisplay.style.display = "none"
        testtext.style.animation = "appearEffect 1s"
        testtext.style.display = "block"
    }, 300)
    
}

