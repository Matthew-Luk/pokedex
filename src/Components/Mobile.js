import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../SCSS/mobile.scss'
import { TbPokeball } from "react-icons/tb";
import {loopPokemon} from './Functions'

const Mobile = (props) => {
  const [pokemonList, setPokemonList] = useState([])
  const {setPokemonId} = props
  const navigate = useNavigate()

  const search = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const view = (e) => {
    setPokemonId(e)
    navigate(`/${e}`)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1025")
    .then((result) => {
      setPokemonList(loopPokemon(result.data))
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <div className='mobileMain'>
      <div className='mobileHeader'>
        <div className='title'>
          <TbPokeball size={"4.8rem"} color='white'/>
          <p>Matthew's Pokédex</p>
        </div>
        <form onSubmit={search}>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
      <div className='mobileContent'>
          {
            pokemonList.map((item, index) => (
              <div className='pokemonCard' onClick={() => view(index+1)} key={index}>
                <p className='pokemonId'>#{index+1}</p>
                {/* <img className='pokemonImg' src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`} alt="pokemon"/> */}
                <img className='pokemonImg' src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="pokemon"/>
                <p className='pokemonName'>{item}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Mobile