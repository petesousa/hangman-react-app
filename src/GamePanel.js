import React, { useState, useEffect } from 'react'
import './App.css'

function NextWord({ newGame }) {
  return <span className="spanNext" onClick={ () => newGame() }>next word</span>
}

export default function GamePanel({ game, player, newGame }) {
  return (
    <div className="gamePanel">
      { !game.gameOver && <h2 className="guessesLeft">You have { game.guessesLeft } guesses left, { player.username }.</h2> }
      { game.gameWon && <h3 className="youWon">You won, { player.username }. Contratulations! <NextWord newGame={newGame} /></h3> }
      { !game.gameWon && game.gameOver && <h3 className="youLost">You lost, { player.username }. We're sorry! <NextWord newGame={newGame} /></h3> } 
    </div>
  )
}
