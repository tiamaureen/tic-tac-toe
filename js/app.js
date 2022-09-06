// I'm going to be working on this more and more over the coming weeks

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

squareEls.forEach((select) => {select.addEventListener('click', handleClick)})
resetBtnEls.addEventListener('click', init)

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
  if(!winner){
    messageEls.textContent = `it's ${turn === 1 ? 'player x' : 'player o'}'s turn.`
  }else if(winner === 1){
    messageEls.textContent = `x, you are the winner!!!`
  }else if(winner === -1){
    messageEls.textContent = `o, you are the winner!!!`
  }else if(winner === 'T'){
    messageEls.textContent = `y'all tied. it's a draw. try again?` 
  }
}

function handleClick(e){
  let sIdx = parseInt(e.target.id.replace('sq',''))
  if(board[sIdx] || winner !== null){
    return
  }
  board[sIdx] = turn
  turn *= -1
  getWinner()
  render()
}

function getWinner(){
  // note: "Reminder: orEach won't work if you're returning out of the loop (since you can't do that with forEach)"
  for (let i = 0; i < winningCombos.length; i++){
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    if(sum === 3){
      winner = 1
    }else if(sum === -3){
      winner = -1
    }else if (board.includes(null) === false){
      winner = 'T'
    }render()
  }
}

function resetGame(){
  init()
}