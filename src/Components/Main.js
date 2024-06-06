import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../SCSS/styles.scss'

const Main = (props) => {
  const {searchPokemon} = props
  const [pokemon, setPokemon] = useState({})

  const capitalize = (e) => {
    if(e !== undefined){
      return e[0].toUpperCase() + e.slice(1)
    }
  }

  const loop = (e) => {
    let arr = []
    arr.push(capitalize(e[0].type.name))
    if(e.length === 2){
      arr.push(capitalize(e[1].type.name))
    }
    return arr.join(" & ")
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`)
    .then((result) => {
      console.log(result.data)
      setPokemon({
        image: result.data.sprites.front_default,
        name: result.data.name,
        id: result.data.id,
        type: loop(result.data.types)
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
            <p>{capitalize(pokemon.name)} {`#${pokemon.id}`}</p>
            <p>{pokemon.type ? `${pokemon.type}` : ""}</p>
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