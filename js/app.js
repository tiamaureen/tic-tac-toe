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

/*---------------------------- variables (state) ----------------------------*/

// step 1: define variables required to track state of game
// - `board`: to represent the state of the squares on the board
// - `turn`: to track whose turn it is
// - `winner`: to represent if anyone has won yet, or if a tie has occurred
let board, turn, winner

/*------------------------ cached element references ------------------------*/

// step 2: store cached element references:
// `squareE1s`: a constant in which the 9 elements representing the squares on page are stored
const squareEls = document.querySelectorAll('div.square')
console.log(squareEls)
// `messageE1`: a constant in which the element that displays the game's status is stored
const messageEls = document.getElementById('message') // game status
console.log(messageEls)

/*----------------------------- event listeners -----------------------------*/


/*-------------------------------- functions --------------------------------*/

// step 3: upon loading
// upon loading the game state should be initialized, and a function should be called to render this game state
// create function called `init`
init()

// call `init` when app loads
function init(){
// set `board` variable to an array containing 9 `null`s to represent empty square
  board = new Array(9).fill(null)
// set the `turn` to `1` - representing player `x`
  turn = 1 // 1 represents player x | -1 represents player o
// set the `winner` to `null`
  winner = null
// call a function called `render` at the end of the `init` function
  render()
}

//  - *9 elements in board array will correspond to a square on board
//   - the nine elements in the `board` array will correspond to a square on the board
//     - index 0 (`board[0]`) will represent the top-left square
//     - index 1 (`board[1]`) will represent the top-middle square
//     - index 2 (`board[2]`) will represent the top-right square
//     - index 3 (`board[3]`) will represent the middle-left square
//     - so on, continuing through the entire board until…
//     - index 8 (`board[8]`) will represent the bottom-right square

//* step 4: state of game that should be rendered to user
// 4a. create a function called `render`
// 4b. loop over `board` and for each element
//    - use current index of the iteration to access the corresponding square in the `squareE1s` array
//    - Style that square however you wish, dependent on the value contained in the current cell being iterated over (`-1`, `1`, or `null`)
// 4c. render a message based on current game state
//    - if `winner` has value of `null` (game is still in progress), render whose turn it is
//    - if `winner` is equal to `'T'` (tie), render a tie message
//    - otherwise, render a congratulatory message to the player that has won

//* step 5:  define required constraints
// 5a. in a constant called `winningCombos` define the eight possible winning combinations as an array of arrays

//* step 6: handle player clicking square with a `handleClick` function
// 6a. create function called `handleClick` that has an `evt` parameter
// 6b. attach an event listener to the game board
//    - you can do this to each one of the existing `squareE1s` OR add a new cached element reference that will allow you to take advantage of event bubbling.
//    - on the `'click'` event, it should call the `handleClick` function
// 6c. obtain index of the square that was clicked by "extracting"  the index from an `id` assigned to the element in the HTML
//    - assign this to a constant called `sqIdx`
// 6d. if the `board` has a value at the `sqIdx` with the current value of `turn`
// - change the turn by multiplying `turn` by `-1` (this flips a `1` to `-1`, and visa-versa)
// - set the 

//* step 7: winner function
// 7a. create function called `getWinner`
//   - 2 method that can be used to find winner (b1 is a more elegant method that takes advantage of the `winningCombos` array wrote above in step 6)
//    - 7b1.
//      - loop through each of the winning combination arrays defined in the `winningCombos` array
//      - total up the three board positions using the three indexes in the current combo
//      - convert the total to an absolute value (convert any negative total to positive)
//      - if the total equals 3, we have a winner
//      - set the `winner` variable to the board's value at the index specified by the first index of that winning combination's
//      array by returning that value
//    - 7b2.
//      - for each one of the winning combinations you wrote in step 5, find the total of each winning combination
//      - convert the total to an absolute value (convert any negative total to positive)
//      - if the total equals 3, we have a winner
//      - set the `winner` variable to the board's value at the index specified by the first index of that winning combination's array by returning that value
// 7c. if there is no winner, check to see if there is a tie
//   - Set the  `winner` variable to `'T'` if there are no more nulls in the board array by returning the string `'T'`
// 7d. if there is no winner and there isn’t a tie, return `null`.

//* step 8: reset game functionality
// 8a. add a reset button to the HTML document
// 8b. tore the new reset button element in a constant named `resetBtnEl`
// 8c. attach an event listener to the `resetBtnEl`
//   - on the `'click'` event it should call the `init` function you created in 3