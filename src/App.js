import React, { useState, useEffect } from 'react'
import './App.css'

import HangManBoard from './HangManBoard'
import Keyboard from './Keyboard'
import WordBox from './WordBox'

import Hangman from './hangman'

export default function App() {

  const [ player, setPlayer ] = useState({})
  const [ game, setGame ] = useState({})

  useEffect(() => {
    Hangman.createPlayer().then(setPlayer)
  }, [])

  useEffect(() => {
    Hangman.createGame(player.id).then(setGame);
  }, [player])

  function guessCharacter(character) {
    console.log(character);
    Hangman.guessCharacter(game.id, character).then(game => setGame(game));
    return;
  }

  function newGame() {
    Hangman.createGame(player.id).then(setGame);
    return;
  }

  return (
    <main className="App">
      <HangManBoard newGame={newGame} game={game} player={player} />
      <WordBox game={game}/>
      <Keyboard game={game} guessCharacter={guessCharacter}/>
    </main>
  )
}
