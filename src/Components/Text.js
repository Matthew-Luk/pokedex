import React, { useState } from 'react'
import '../SCSS/styles.scss'
import axios from 'axios'

const Text = (props) => {
  const {searchPokemon, setSearchPokemon} = props
  const [textInput, setTextInput] = useState("")

  const search = (e) => {
    e.preventDefault()
    setSearchPokemon(e.target[0].value.toLowerCase())
    setTextInput("")
  }

  const changeInput = (e) => {
    setTextInput(e.target.value)
  }

  return (
    <div className='text'>
      <p>What Pokémon did you want to search for?</p>
      <form onSubmit={search}>
        <input type="text" placeholder='Search' onChange={changeInput} value={textInput}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Text