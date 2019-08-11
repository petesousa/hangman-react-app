import React from 'react'
import './App.css'

import charBox from './charBox'

export default function Keyboard({ game, guessCharacter }) {

  if (!game.targetWord) { return <></> }

  function wichClas(char) {
    if (game.guesses.includes(char.char) && !game.targetWord.split("").includes(char.char)) { return "wrongChar" }
    if (game.guesses.includes(char.char) && game.targetWord.split("").includes(char.char)) { return "correctChar" }
    if (char.special) { return "specialChar" }
    if (!char.special) { return "keyboardChar" }

  }

  return (
    <div className="Keyboard">
        { charBox.getChars().map(char => {
          return (
            <span 
              onClick={() => guessCharacter(char.char)}
              className={wichClas(char)} 
              id={ char.char }>{ char.char }</span>
          )
        } )}
    </div>
  )
}
