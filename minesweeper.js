const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row =[];
    for (let columnIndex = 0; columnIndex < numberOfColumnsl; columnIndex++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row =[];
    for (let columnIndex = 0; columnIndex < numberOfColumnsl; columnIndex++){
      row.push(' ');
    }
    board.push(row);
  }
  
  let numberOfBombsPlaced = 0;
  
  while (numberOfBombsPlaced < numberOfBombs) {
  	const randomRowIndex = Math.floor(Math.random() * numberOfRows);
  	const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++
	}
	
	return board;
};

const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3,3,3);
console.log('Player Board');
printBoard(playerBoard);
console.log('Bomb Board');
printBoard(bombBoard);
