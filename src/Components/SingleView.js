import React, { useState, useEffect } from 'react'
import { capitalize, loopTypes, colorType } from './Functions'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const SingleView = (props) => {
  const [pokemon, setPokemon] = useState({})
  const {pokemonId} = props
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then((result) => {
      console.log(result.data)
      setPokemon({
        image: `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
        name: capitalize(result.data.name),
        id: result.data.id,
        type: loopTypes(result.data.types),
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div className='singleViewPage' style={{backgroundColor: `${pokemon.type? `${colorType(pokemon.type[0])}` : ""}`}}>
      <div className='singleViewContent'>
        <div className='singleViewCard'>
          <p>{pokemon.type}</p>

        </div>
      </div>
    </div>
  )
}

export default SingleView