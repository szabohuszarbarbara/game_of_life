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
    board.setAttribute("class", "board-container")

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
    const body = document.querySelector("body")
    body.appendChild(board)
}

function setLivingCells(clickEvent) {
    const cell = clickEvent.currentTarget
    cell.classList.add("living")


}


function init() {
    drawBoard(20, 20)
    alert("Please set the living cells by clicking on them! When you finished click OK!")
    setLivingCells()
    // startGame()
}


init()