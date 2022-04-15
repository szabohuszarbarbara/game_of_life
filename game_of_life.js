let intervalTime

let initRow = 30
let initCol = 50
let gameInterval


function startGame() {
    changeButtons();
    gameInterval = setInterval(markLivingCells, intervalTime=960);
}

function endGeneration() {
    const cellsBorn = document.querySelectorAll(".born")
    for (let cell of cellsBorn) {
        cell.classList.remove("born")
        cell.classList.add("living")
    }
    const cellsDead = document.querySelectorAll(".dead")
    for (let cell of cellsDead) {
            cell.classList.remove("dead")
            cell.classList.remove("living")
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
            cell.classList.add("born");
        }
        else {cell.classList.add("dead");
        }
    }
    endGeneration()
}

function checkNeighbours(cell) {
    const row = Number(cell.dataset.row)
    const col = Number(cell.dataset.col)
    let livingCell = 0

    for (let i = Math.max(0, row-1); i <= Math.min(initRow-1, row+1); i++) {
        for (let j = Math.max(0, col-1); j <= Math.min(initCol-1, col+1); j++) {
            if (i === row && j === col) {continue}
            let currentNeighbour = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`)
            if (currentNeighbour.classList.contains("living")) {
            livingCell ++ }
        }
    }
    return livingCell
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
    if (intervalTime >= 3840) {
        intervalTime = 3840
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
        if (intervalTime <= 30) {
        intervalTime = 30
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
}

function init() {
    drawStartButton()
    drawBoard(initRow, initCol)
    // alert("Please set the living cells by clicking on them! When you finished click OK!")
}


init()