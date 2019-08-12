import React, { useState, useEffect } from 'react'
import './App.css'

import Register from './Register'

import Keyboard from './Keyboard'
import WordsOver from './WordsOver'
import GamePanel from './GamePanel'
import WordBox from './WordBox'
import Hangman from './hangman'

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

  if(wordsOver) {
    return <WordsOver />
  }

  return (
    <main className="App">
      <GamePanel game={game} player={player} newGame={newGame} />
      <WordBox game={game}/>
      <Keyboard game={game} guessCharacter={guessCharacter}/>
    </main>
  )
}
