import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  
  const handleGamePlay = (clickedSquare) => {
    let updateSquares = [...squares]
    
    
    if(turn % 2 === 0 && updateSquares[clickedSquare] !== "⭕️" && updateSquares [clickedSquare] !== "❌") {
      updateSquares[clickedSquare]="❌"
      setSquares(updateSquares)
      setTurn(turn + 1)
    } else if (turn % 2 !== 0 && updateSquares[clickedSquare] !== "❌" && updateSquares[clickedSquare] !== "⭕️") {
      updateSquares[clickedSquare]="⭕️"
      setSquares(updateSquares)
      setTurn(turn + 1)
       console.log(turn)
    }
    }
    
      let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      for (let i=0 ; i < wins.length ; i++) {
        let [a, b, c] = wins[i];
        if (squares [a] && squares[a] === squares [b] && squares[a] === squares [c] ) {
          setSquares() 
          return 
        }
      } 


    


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameBoard'>
      {squares.map((square, index) => {
          return (
          <Square 
          square={square} 
          index={index} 
          key={index}
          handleGamePlay={handleGamePlay}/>
        )
        })}
      </div>
    </>
  )
}

export default App