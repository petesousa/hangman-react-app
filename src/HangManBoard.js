import React from 'react'
import './App.css'

export default function HangManBoard(props) {
  if (!props.game.targetWord) { return <></> }

  const { player, game } = props;
  return (
    <div className="HangManBoard">
       <h1>Hello {player.username}!</h1>
       <h2>you have {game.guessesLeft} guesses left</h2>
       { game.gameWon && <h3>YOU WON!</h3> }
       { !game.gameWon && game.gameOver && <h3>YOU LOST!</h3> }
       { !game.gameWon && game.gameOver && <h3>{ game.targetWord }</h3> }
       { game.gameOver && <button onClick={ () => props.newGame() }>NEXT WORD</button> }
       
    </div>
  )
}
