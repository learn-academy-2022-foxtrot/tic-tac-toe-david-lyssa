import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)

  const [firstPlayerMoves, setFirstPlayerMoves] = useState([])
  const [secondPlayerMoves, setSecondPlayerMoves] = useState([])

  const [winner, setWinner] = useState(null)

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
    
  const handleGamePlay = (clickedSquare) => {
    let updateSquares = [...squares]
   
if(turn % 2 === 0 && 
      updateSquares[clickedSquare] !== "⭕️" && 
      updateSquares [clickedSquare] !== "❌") {
      updateSquares[clickedSquare]="❌"
      setSquares(updateSquares)
      setFirstPlayerMoves(firstPlayerMoves.concat(clickedSquare))
      setTurn(turn + 1)
    } 
    else if (turn % 2 !== 0 && 
      updateSquares[clickedSquare] !== "❌" && 
      updateSquares[clickedSquare] !== "⭕️") {
      updateSquares[clickedSquare]="⭕️"
      setSquares(updateSquares)
      setSecondPlayerMoves(secondPlayerMoves.concat(clickedSquare))
      setTurn(turn + 1)
      console.log(turn)
    }
    }
    
      const handleReset = () => {
        setSquares(Array(9).fill(null))
        setTurn(0)
      }

      const handleTie = (squares.every((element) => element !== null))
  
    
      const handleWin = () => {
      for (let i = 0; i < wins.length; i++) {
        console.log(i)
      }
    }

      for (let i=0 ; i < wins.length ; i++) {
        let [a, b, c] = wins[i];

        if (squares [a] 
          && squares[a] === squares [b] 
          && squares[a] === squares [c]
           ) {
          
          
          setWinner("winner")
          console.log("winner",winner)
          alert("you win")
          handleReset()
        } else if (handleTie && winner === null) {
          handleReset()
          console.log("tie")
          
        }
      } 
    
   
  return (
    <>
      <h1>Tic Tac Toe</h1>
      
      <button className='reset-button' onClick={handleReset}>Reset</button>
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