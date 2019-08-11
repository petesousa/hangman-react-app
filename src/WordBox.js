import React from 'react'

export default function WordBox(props) {
    if (!props.game.targetWord) { return <></> }

    const { targetWord, guesses, gameOver, gameWon } = props.game

    if (gameOver && !gameWon) {
      return (
        <div className="WordBox">
            { 
              targetWord.split("").map(char => {
                return (
                  <span 
                    className="displayedChar"
                    id={ char }>{ char }</span>
                )
              })
            }
        </div>
      )
    }

    return (
      <div className="WordBox">
          
          { 
            targetWord.split("").map(char => {
              return (
                <span 
                  className={ guesses.includes(char) ? "displayedChar" : "hiddenChar" }
                  id={ char }>{ char }</span>
              )
            })
          }
      </div>
    )
}
