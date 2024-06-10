import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../SCSS/mobile.scss'
import { TbPokeball } from "react-icons/tb";

const Mobile = () => {

  const [pokemonList, setPokemonList] = useState({})

  const search = (e) => {
    e.preventDefault()
    console.log(e)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=5000")
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <div className='mobileMain'>
      <div className='mobileHeader'>
        <div className='title'>
          <TbPokeball size={"2.4rem"} color='white'/>
          <p>Matthew's Pokédex</p>
        </div>
        <form onSubmit={search}>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
      <div className='mobileContent'>

      </div>
    </div>
  )
}

export default Mobile