import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../SCSS/styles.scss'
import {loopTypes, capitalize} from './Functions'

const Main = (props) => {
  const {searchPokemon} = props
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`)
    .then((result) => {
      console.log(result.data)
      setPokemon({
        image: result.data.sprites.front_default,
        name: capitalize(result.data.name),
        id: result.data.id,
        type: loopTypes(result.data.types),
        audio: result.data.cries.latest
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },[searchPokemon])

  return (
    <div className='main'>
      <div className='mainLeft'>
        <div className='leftTop'>

        </div>
        <div className='leftMiddle'>
          <div className='screenBorderWrap'>
            <div className='screenBorder'>
              <div className='screenButtonTop'>
                <p className='redButton1'></p>
                <p className='redButton1'></p>
              </div>
              <div className='screen1'>
                {pokemon.image ? <img src={pokemon.image} alt="pokemon that was searched" /> : ""}
              </div>
              <div className='screenButtonBottom'>
                <p className='redButton2'></p>
                <div className='speakers'>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='leftBottom'>

        </div>
        
      </div>
      <div className='mainRight'>
        <div className='rightTop'>

        </div>
        <div className='rightMiddle'>
          <div className='screen2'>
            <p>{pokemon.name? `${pokemon.name} #${pokemon.id}` : ""}</p>
            <p>{pokemon.type ? `${pokemon.type}` : ""}</p>
          </div>
          <div className='buttonRow'>
            <button style={{borderTopLeftRadius:" 0.8rem"}}><audio src={`${pokemon.audio}`}> button 1 </audio> </button>
            <button>button 2</button>
            <button>button 3</button>
            <button style={{borderTopRightRadius:" 0.8rem"}}>button 4</button>
            <button style={{borderBottomLeftRadius:" 0.8rem"}}>button 5</button>
            <button>button 6</button>
            <button>button 7</button>
            <button style={{borderBottomRightRadius:" 0.8rem"}}>button 8</button>
          </div>
        </div>
        <div className='rightBottom'>

        </div>
      </div>
      
    </div>
  )
}

export default Main