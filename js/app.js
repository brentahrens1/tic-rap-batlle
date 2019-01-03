let gameBoard;  
let winner = null;
let playerTurn;
let nextBattle = document.getElementById('new');
nextBattle.addEventListener('click', newGame);

function newGame(){
    document.location.reload()
};

let renderLookUp = {
    '1': '<img src="https://i.imgur.com/3RiZlCZ.png"/>',
    '-1': '<img src="https://i.imgur.com/U64bGIL.png"/>',
    null: '<img src="images/mic.jpg/">',
};

const game = {
    init() {
        gameBoard = [0, 0 ,0, 0 ,0 ,0 ,0 ,0, 0];
      playerTurn = 1;
    },
     
    calculateWinner() {
        let winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];

        let winArray = []; 
         for (let i = 0; i < winCombos.length; i++) {
            let boardArray = []; 
            for (let j = 0; j < winCombos[i].length; j++) {
               boardArray.push(parseInt(gameBoard[winCombos[i][j]]));
             }
        winArray.push(boardArray); 
        }
         for(i = 0; i < winCombos.length; i++) {
           winArray[i].reduce(function (acc, total) {
            return winArray[i] = acc += total; 
           }, 0);
           if (winArray[i] === 3) {
                alert('BIGGIE WINS THE BATTLE!');
            } else if (winArray[i] === -3) {
                alert('TUPAC WINS THE BATTLE!');
            }
        }
        console.log(winArray); 
    },  
    
    //represents the data on the board 
    render() {
        gameBoard.forEach( (idx, square) => {
            let playerID = gameBoard[idx];
            let fill = renderLookUp[playerID];
            square.innerHTML = fill;   
        })
            
    }
};

document.querySelector('table').addEventListener('click', function (e){
    let index =  parseInt(e.target.id.replace('square-', '')); 
    
    if(gameBoard[index] === 0) {
        if (playerTurn === 1) {
            e.target.innerHTML = renderLookUp['1'];
            gameBoard[index] = playerTurn; 
        } else if (playerTurn === -1) {
            e.target.innerHTML = renderLookUp['-1'];
            gameBoard[index] = playerTurn; 
        }  
        game.render();
        game.calculateWinner();
        playerTurn *= -1; 
        
    }
});

game.init(); 





