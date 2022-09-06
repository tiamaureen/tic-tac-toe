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
const messageEls = document.getElementById('message') // game status
const resetBtnEls = document.getElementById('restart')

/*----------------------------- event listeners -----------------------------*/

squareEls.forEach((select) => {select.addEventListener("click", handleClick)})
resetBtnEls.addEventListener("click", init)

/*-------------------------------- functions --------------------------------*/

init()

function init(){
  board = new Array(9).fill(null)
  turn = 1 // 1 represents player x | -1 represents player o
  winner = null
  render()
}

function render(){
  board.forEach(function(s,i){
    if(s === 1){
      squareEls[i].textContent = 'x'
    }else if(s === -1){
      squareEls[i].textContent = 'o'
    }else if(s === null){
      squareEls[i].textContent = ''
    }
  })
  // if(!winner){
  //   messageEls.textContent = `it's ${turn === 1 ? 'player x' : 'player o'}'s turn.`
  // }else if(winner === 1){
  //   messageEls.textContent = `x, you are the winner!!!.`
  // }else if(winner === -1){
  //   messageEls.textContent = `o, you are the winner!!!.`
  // }else if(winner === 'T'){
  //   messageEls.textContent = `y'all tied. it's a draw. try again?` 
  // }
  switch(winner){
    case 1:
      messageEls.textContent = `x, you are the winner!!!.`
    case -1:
      messageEls.textContent = `o, you are the winner!!!.`
    case "T":
      messageEls.textContent = `y'all tied. it's a draw. try again?` 
    default:
    messageEls.textContent = `it's ${turn === 1 ? 'player x' : 'player o'}'s turn.`
  }
}

function handleClick(e){
  let sIdx = parseInt(e.target.id.replace('sq', ''))
  if(board[sIdx] || winner !== null){
    return
  }
  board[sIdx] = turn
  turn *= -1
  render()
}

function getWinner(){
  let winner = []
  winningCombos.forEach(function(c, i){
    if (board[c[0]] && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]])
    winner = board[c[0]]
  })
  return winner ? winner : board.includes('') ? null : 'T'
  render()
}

function resetGame(){
  init()
}