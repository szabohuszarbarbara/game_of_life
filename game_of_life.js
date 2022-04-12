// game menu
//         graphics
//         start game button
//         some explanation

// adjust board size custom vs full screen

// add init cells

// start game / stop / pause / restart / quit


let intervalTime = 1000

let initRow = 30
let initCol = 30
//
// const gameInterval = setInterval(checkLivingCells, intervalTime)


function startGame() {
    changeButtons();
    // gameInterval;
    setInterval(markLivingCells, intervalTime)



}

function checkNeightbours(cell) {
    const row = Number(cell.dataset.row)
    const col = Number(cell.dataset.col)
    let livingCell = 0
    const upperRow = row-1
    const lowerRow = row+1
    const leftCol = col-1
    const rightCol = col+1

    if (row > 0 && row < initRow-1 && col > 0 && col < initCol-1) {
        const upperLeftNeighbour = document.querySelector(`.cell[data-row="${upperRow}"][data-col="${leftCol}"]`)
        if (upperLeftNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const upperNeighbour = document.querySelector(`.cell[data-row="${upperRow}"][data-col="${col}"]`)
        if (upperNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const upperRightNeighbour = document.querySelector(`.cell[data-row="${upperRow}"][data-col="${rightCol}"]`)
        if (upperRightNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const leftNeighbour = document.querySelector(`.cell[data-row="${row}"][data-col="${leftCol}"]`)
        if (leftNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const rightNeighbour = document.querySelector(`.cell[data-row="${row}"][data-col="${rightCol}"]`)
        if (rightNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const lowerLeftNeighbour = document.querySelector(`.cell[data-row="${lowerRow}"][data-col="${leftCol}"]`)
        if (lowerLeftNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const lowerNeighbour = document.querySelector(`[data-row="${lowerRow}"][data-col="${col}"]`)
        if (lowerNeighbour.classList.contains("living")) {
            livingCell ++
        }
        const lowerRightNeighbour = document.querySelector(`.cell[data-row="${lowerRow}"][data-col="${rightCol}"]`)
        if (lowerRightNeighbour.classList.contains("living")) {
            livingCell ++
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
        const livingCellNeighbourCount = checkNeightbours(cell)
        if (cell.classList.contains("living") && livingCellNeighbourCount === 2) {
        console.log("still")}
        else if (cell.classList.contains("living") && livingCellNeighbourCount === 3) {
        console.log("still")}
        else if (cell.className !== "living" && livingCellNeighbourCount === 3) {
            cell.classList.add("born")
            console.log("get alive")
        }
        else {cell.classList.add("dead")
            console.log("dead")
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

}

function stop() {
    clearInterval(gameInterval)
}

function faster() {

}

function setLivingCells(clickEvent) {
    const cell = clickEvent.currentTarget
    cell.classList.toggle("living")
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
    setLivingCells()
}


init()