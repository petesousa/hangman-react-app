import React, { useState, useEffect } from 'react'
import './App.css'

import Register from './Register'

import Keyboard from './Keyboard'
import WordBox from './WordBox'
import Hangman from './hangman'

function NextWord({ newGame }) {
  return <span className="spanNext" onClick={ () => newGame() }>next word</span>
}

export default function App() {

  const [ wordsOver, setWordsOver ] = useState(false)
  const [ player, setPlayer ] = useState({})
  const [ game, setGame ] = useState({})

  useEffect(() => {
    Hangman.createGame(player.id).then(setGame);
  }, [player])

  function guessCharacter(character) {
    Hangman.guessCharacter(game.id, character).then(game => setGame(game));
    return;
  }

  function newGame() {
    Hangman.createGame(player.id).then(game => {
      if (!game) {
        setWordsOver(true)
        return
      }
      return setGame(game)
    });
    return;
  }

  function createPlayer(username) {
    Hangman.createPlayer(username).then(setPlayer);
  }

  if (!player.id) {
    return <Register createPlayer={createPlayer} />
  }

  if (wordsOver) {
    return (
      <div className="noMoreWords">
        <h1>Game Over</h1>
      </div>
    )
  }

  return (
    <>
      <main className="App">
        <div className="gamePanel">
          { !game.gameOver && <h2 className="guessesLeft">You have { game.guessesLeft } guesses left, { player.username }.</h2> }
          { game.gameWon && <h3 className="youWon">You won, { player.username }. Contratulations! <NextWord newGame={newGame} /></h3> }
          { !game.gameWon && game.gameOver && <h3 className="youLost">You lost, { player.username }. We're sorry! <NextWord newGame={newGame} /></h3> } 
        </div>
        <WordBox game={game}/>
        <Keyboard game={game} guessCharacter={guessCharacter}/>
      </main>
    </>
  )
}
