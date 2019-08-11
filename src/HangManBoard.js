import React from 'react'
import './App.css'

export default function HangManBoard(props) {
  if (!props.game.targetWord) { return <></> }

  const { player, game } = props;
  return (
    <div className="HangManBoard">
       
       
    </div>
  )
}
