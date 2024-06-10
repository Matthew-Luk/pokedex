import React, { useState } from 'react'
import '../SCSS/styles.scss'
import { TbPokeball } from "react-icons/tb";

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
      <TbPokeball style={{position: "absolute", left: "0", top: "0"}} size={"2.4rem"}/>
      <TbPokeball style={{position: "absolute", right: "0", top: "0"}} size={"2.4rem"}/>
      <div className='textWrapper'>
        <p>What Pokémon did you want to search for?</p>
        <form onSubmit={search}>
          <input type="text" onChange={changeInput} value={textInput}/>
        </form>
      </div>
      <TbPokeball style={{position: "absolute", left: "0", bottom: "0"}} size={"2.4rem"}/>
      <TbPokeball style={{position: "absolute", right: "0", bottom: "0"}} size={"2.4rem"}/>
    </div>
  )
}

export default Text