const playerOneScoreDisplay = document.getElementById('playerOneScore');
const playerTwoScoreDisplay = document.getElementById('playerTwoScore');
const gameLmt = document.getElementById('gameLmt');
const gameLmtInput = document.getElementById('gameLmtInput');
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');
const resetButton = document.getElementById('resetButton');
// console.log(playerOneScore, playerTwoScore, gameLmt, gameLmtInput, playerOne, playerTwo, resetButton)

let playerOneScore = 0;
let playerTwoScore = 0;
let winingScore = 10;


// Event Listener
playerOne.addEventListener('click', handlePlayerOne);
playerTwo.addEventListener('click', handlePlayerTwo);
resetButton.addEventListener('click', handleResetBtn)
gameLmtInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        let inputValue = e.target.value
        winingScore = inputValue;
        gameLmt.textContent = inputValue;
        e.target.value = '';
    }
})





//Event Handler 
function handlePlayerOne(){

    let playerScore = generateRandomScore()

    if(playerOneScore === winingScore || playerOneScore >= winingScore){
        buttonDisabled()
        return alert('Win player One');
    } 
    if(playerOneScore + playerScore > winingScore){
        playerOneScore = winingScore 
        playerOneScoreDisplay.textContent = winingScore;
        buttonDisabled()
        alert('player One win')
    }
    if(playerOneScore < winingScore) playerOneScore += playerScore;

    playerOneScoreDisplay.textContent = playerOneScore;
    playerOne.disabled = true;
    playerTwo.disabled = false;
}
function handlePlayerTwo(){

    let playerScore = generateRandomScore()

    if(playerTwoScore === winingScore || playerTwoScore >= winingScore) {
        buttonDisabled()
        return alert('Win player Two');
    }
    if(playerTwoScore + playerScore > winingScore) {
        playerTwoScore = winingScore;
        playerTwoScoreDisplay.textContent = winingScore;
        buttonDisabled()
        alert('Player Two Win')
    }
    if(playerTwoScore < winingScore) playerTwoScore += playerScore; 

    playerTwoScoreDisplay.textContent = playerTwoScore;
    playerOne.disabled = false;
    playerTwo.disabled = true;
}

// Dom function

function handleResetBtn() {
    playerOneScore = 0;
    playerTwoScore = 0;
    winingScore = 10;
    playerOneScoreDisplay.textContent = 0;
    playerTwoScoreDisplay.textContent = 0;

    playerOne.classList.remove('buttonDisabled');
    playerTwo.classList.remove('buttonDisabled');
    playerOne.disabled = false;
    playerTwo.disabled = false;
    gameLmtInput.disabled = false;
}

function buttonDisabled(){
    playerOne.classList.add('buttonDisabled');
    playerTwo.classList.add('buttonDisabled');
    playerOne.disabled = true;
    playerTwo.disabled = true;
    gameLmtInput.disabled = true;
}

// units function

/**
 * this function generate random number
 * @returns random number
 */
function generateRandomScore(){
    return Math.floor(Math.random() * 3) + 1
}
