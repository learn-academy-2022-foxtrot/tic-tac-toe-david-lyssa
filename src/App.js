import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  
  const handleGamePlay = (clickedSquare) => {
    let updateSquares = [...squares]
    setTurn(turn + 1)
    
    if(turn % 2 === 0 && updateSquares[clickedSquare] !== "⭕️" && updateSquares [clickedSquare] !== "❌") {
      updateSquares[clickedSquare]="❌"
      setSquares(updateSquares)
    
    } else if (turn % 2 !== 0 && updateSquares[clickedSquare] !== "❌" && updateSquares[clickedSquare] !== "⭕️") {
      updateSquares[clickedSquare]="⭕️"
      setSquares(updateSquares)
       console.log(turn)
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