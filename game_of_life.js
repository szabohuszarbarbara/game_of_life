// game menu
//         graphics
//         start game button
//         some explanation

// adjust board size custom vs full screen

// add init cells

// start game / stop / pause / restart / quit

// rules:
//     A sejt túléli a kört, ha két vagy három szomszédja van.
//     A sejt elpusztul, ha kettőnél kevesebb (elszigetelődés), vagy háromnál több (túlnépesedés) szomszédja van.
//     Új sejt születik minden olyan cellában, melynek környezetében pontosan három sejt található.

    // Az elhaló sejtek megjelölése
    // A születő sejtek elhelyezése
    // A megjelölt sejtek eltávolítása



function drawBoard(row, col) {
    const board = document.createElement("div")
    board.setAttribute("class", "board")

    for (let i = 0; i < row; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        row.setAttribute("data-row", `${i}`)
        for (let j = 0; j < col; j ++) {
            let cell = document.createElement("div")
            cell.setAttribute("class", "cell")
            cell.setAttribute("data-row", `${i}`)
            cell.setAttribute("data-col", `${j}`)
            cell.addEventListener("click", setLivingCells)
            row.appendChild(cell)
        }
        board.appendChild(row)
    }
    const boardContainer = document.querySelector(".board-container")
    boardContainer.appendChild(board)
}

function setLivingCells(clickEvent) {
    const cell = clickEvent.currentTarget
    cell.classList.add("living")
}

function startGame() {
    changeButtons();
    checkLivingCells();
    checkDeadCells();
    checkNewCells();

}

function checkNeightbours(cell) {


}

function checkLivingCells() {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells) {
        checkNeightbours(cell)
    }
}

function checkDeadCells() {

}

function checkNewCells() {

}


function changeButtons() {
    document.querySelector(".button-container").innerHTML = ''
    const slowSpeedButton = document.createElement("button")
    slowSpeedButton.setAttribute("class", "slower-button")
    slowSpeedButton.addEventListener("click", slower)
    slowSpeedButton.innerText = "SLOWER"

    const pauseButton = document.createElement("button")
    pauseButton.setAttribute("class", "slower-button")
    pauseButton.addEventListener("click", pause)
    pauseButton.innerText = "PAUSE"

    const fastSpeedButton = document.createElement("button")
    fastSpeedButton.setAttribute("class", "faster-button")
    fastSpeedButton.addEventListener("click", faster)
    fastSpeedButton.innerText = "FASTER"

    const buttonContainer = document.querySelector(".button-container")
    buttonContainer.appendChild(slowSpeedButton)
    buttonContainer.appendChild(pauseButton)
    buttonContainer.appendChild(fastSpeedButton)
}

function slower() {

}

function pause() {

}

function faster() {

}

function drawStartButton() {
    const startButton = document.createElement("button")
    startButton.setAttribute("class", "start-button")
    startButton.innerText = "START GAME"

    startButton.addEventListener("click", startGame)
    const buttonContainer = document.querySelector(".button-container")
    buttonContainer.appendChild(startButton)
    // root.style.visibility = "hidden"
}


function init() {
    drawStartButton()
    drawBoard(30, 30)
    alert("Please set the living cells by clicking on them! When you finished click OK!")
    setLivingCells()
}


init()