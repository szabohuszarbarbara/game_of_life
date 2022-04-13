// game menu
//         graphics
//         start game button
//         some explanation

// adjust board size custom vs full screen

// start game / stop / pause / restart / quit


let intervalTime

let initRow = 30
let initCol = 30
let gameInterval


function startGame() {
    changeButtons();
    gameInterval = setInterval(markLivingCells, intervalTime=1000);
}

function checkNeighbours(cell) {
    const row = Number(cell.dataset.row)
    const col = Number(cell.dataset.col)
    let livingCell = 0
    const upperRow = row-1
    const lowerRow = row+1
    const leftCol = col-1
    const rightCol = col+1

    for (let i = Math.max(0, upperRow); i <= Math.min(initRow-1, lowerRow); i++) {
        for (let j = Math.max(0, leftCol); j <= Math.min(initCol-1, rightCol); j++) {
            if (i === row && j === col) {continue}
            let currentNeighbour = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`)
            if (currentNeighbour.classList.contains("living")) {
            livingCell ++ }
        }
    }
    return livingCell

}

function endGeneration() {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells) {
        if (cell.classList.contains("born")) {
            cell.classList.remove("born")
            cell.classList.add("living")
        }
        else if (cell.classList.contains("dead")) {
            cell.classList.remove("dead")
            cell.classList.remove("living")
        }
    }
}


function markLivingCells() {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells) {
        const livingCellNeighbourCount = checkNeighbours(cell)
        if (cell.classList.contains("living") && livingCellNeighbourCount === 2) {
        }
        else if (cell.classList.contains("living") && livingCellNeighbourCount === 3) {
        }
        else if (cell.className !== "living" && livingCellNeighbourCount === 3) {
            cell.classList.add("born")
        }
        else {cell.classList.add("dead")
        }
    }
    endGeneration()
}


function changeButtons() {
    document.querySelector(".button-container").innerHTML = ''
    const slowSpeedButton = document.createElement("button")
    slowSpeedButton.setAttribute("class", "slower-button")
    slowSpeedButton.addEventListener("click", slower)
    slowSpeedButton.innerText = "SLOWER"

    const pauseButton = document.createElement("button")
    pauseButton.setAttribute("class", "slower-button")
    pauseButton.addEventListener("click", stop)
    pauseButton.innerText = "STOP"

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
    clearInterval(gameInterval)
    if (intervalTime >= 4000) {
        intervalTime = 4000
    } else {
        intervalTime = intervalTime * 2
    }
    gameInterval = setInterval(markLivingCells, intervalTime)
}

function stop() {
    clearInterval(gameInterval)
}

function faster() {
    clearInterval(gameInterval)
        if (intervalTime <= 125) {
        intervalTime = 125
    } else {
        intervalTime = intervalTime/ 2
    }
    gameInterval = setInterval(markLivingCells, intervalTime)
}

function setLivingCells(clickEvent) {
    clickEvent.currentTarget.classList.toggle("living")
}

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
    drawBoard(initRow, initCol)
    alert("Please set the living cells by clicking on them! When you finished click OK!")
}


init()