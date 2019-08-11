import React, { useState } from 'react'
import './App.css'

export default function Register({ createPlayer }) {

  const [ username, setUsername ] = useState("")

  function updateUsername(e) {
    const username = e.target.value
    setUsername(username)
  }

  function submitUsername(e) {
    e.preventDefault()
    createPlayer(username)
  }

  return (
    <form className="registerDialog">
      <h1>What is your name?!</h1>
      <input 
        value={username}
        onChange={updateUsername}
        onSubmit={submitUsername}
        type="text"
        autoComplete="off" 
        name="username" 
        className="registerInput" />
    </form>
  )
}
