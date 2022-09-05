/*----------------------------------- mvp -----------------------------------*/

// - display empty tic-tac-toe board when the page is initially displayed
// - a player can click on the nine cells to make a move
// - every click will alternate between marking and x and o
// - once occupied with an x or o the cell can't be played again
// - provide a reset game button that will clear the contents of the board
// - display whose turn it is ("x" or "o")
// - provide win logic and display a winning message
// - provide logic for a cat's game (tie), also displaying a message


/*-------------------------------- constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

/*---------------------------- variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ cached element references ------------------------*/

const squareEls = document.querySelectorAll('div.square')
console.log(squareEls)
const messageEls = document.getElementById('message') // game status
console.log(messageEls)

/*----------------------------- event listeners -----------------------------*/

squareEls.forEach((selectSq) => {selectSq.addEventListener("click", handleClick)})

/*-------------------------------- functions --------------------------------*/

init()

function init(){
  board = new Array(9).fill(null)
  turn = 1 // 1 represents player x | -1 represents player o
  winner = null
  render()
}

function render(){
  board.forEach(function(square,index){
    if(square === 1){
      squareEls[index].textContent = 'x'
    }else if(square === -1){
      squareEls[index].textContent = 'o'
    }else{
      squareEls[index].textContent = ''
    }
  })
  if(winner === null){
    messageEls.textContent = `it's ${turn === 1 ? 'Player X' : 'Player O'}'s turn.`
  }else if(winner === 'T'){
    messageEls.textContent = `y'all tied.`
  }else if(winner === 1){
    messageEls.textContent = `x, you are the winner!!!.`
  }else if(winner === -1){
    messageEls.textContent = `o, you are the winner!!!.`
  }
}

function handleClick(evt){ //click event
  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] !== null){
    return
  }
  board[sqIdx] = turn
  turn *= -1
  render()
  console.log(board[sqIdx])//
  }

function getWinner(){
  let winner = null
  winningCombos.forEach(function(curCombo,index){
    if(board[curCombo[0]] && board[curCombo[1]] === board[curCombo[1]] && board[curCombo[2]]){
      winner = board[combo[0]]
    }
  })
  if(winner){
    return winner
  }else if(board.includes('')){
    return 'T'
  }
}

//* step 8: reset game functionality
// function 
// 8a. add a reset button to the HTML document
// 8b. tore the new reset button element in a constant named `resetBtnEl`
// 8c. attach an event listener to the `resetBtnEl`
//   - on the `'click'` event it should call the `init` function you created in 3