import React from 'react'
import '../SCSS/styles.scss'
import axios from 'axios'

const Text = (props) => {
  const {searchPokemon, setSearchPokemon} = props

  // const search = (e) => {
  //   e.preventDefault()
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target[0].value.toLowerCase()}/`)
  //   .then((result) => {
  //     console.log(result.data)
  //     setPokemonImage(result.data.sprites.front_default)
  //     console.log(pokemonImage)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }
  const search = (e) => {
    e.preventDefault()
    setSearchPokemon(e.target[0].value.toLowerCase())
  }


  return (
    <div className='text'>
      <p>What Pokémon did you want to search for?</p>
      <form onSubmit={search}>
        <input type="text" placeholder='Search'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Text