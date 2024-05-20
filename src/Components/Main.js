import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../SCSS/styles.scss'

const Main = (props) => {
  const {searchPokemon, setSearchPokemon} = props
  const [pokemonImage, setPokemonImage] = useState("")

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`)
    .then((result) => {
      console.log(result.data)
      setPokemonImage(result.data.sprites.front_default)
      console.log(pokemonImage)
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
                {pokemonImage ? <img src={pokemonImage} alt="pokemon that was searched" /> : ""}
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
            <p></p>
            <p></p>
          </div>
          <div className='buttonRow'>

          </div>
        </div>
        <div className='rightBottom'>

        </div>
      </div>
      
    </div>
  )
}

export default Main