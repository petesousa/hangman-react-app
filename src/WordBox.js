import React from 'react'

export default function WordBox(props) {
    if (!props.game.targetWord) { return <></> }

    const { targetWord, guesses } = props.game
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
