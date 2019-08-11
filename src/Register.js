import React, { useState } from 'react'
import './App.css'

export default function Register({ createPlayer }) {

  const [ username, setUsername ] = useState("")

  function updateUsername(e) {
    const username = e.target.value
    setUsername(username)
  }

  function submitUsername(username) {
    createPlayer(username)
  }

  return (
    <form 
      className="registerDialog"
      onSubmit={e => {
        e.preventDefault() 
        submitUsername(username)
      }}>
      
      <input 
        autoFocus
        placeholder="Enter your username and hit enter..."
        value={username}
        onChange={updateUsername}
        type="text"
        autoComplete="off" 
        name="username" 
        className="registerInput" />
      <button type="submit" className="submitBtn">
        Submit
      </button>
    </form>
  )
}
