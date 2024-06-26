import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../SCSS/mobile.scss'
import { TbPokeball } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {loopPokemon, getTypes, colorType, loopPokemon2} from './Functions'

const Mobile = (props) => {
  const [pokemonList, setPokemonList] = useState([])
  const [searchPokemon, setSearchPokemon] = useState("")
  const {setPokemonId} = props
  const navigate = useNavigate()

  const search = (e) => {
    e.preventDefault()
    setSearchPokemon(e.target.value)
  }

  const search2 = (e) => {
    e.preventDefault()
    setSearchPokemon(e.target[0].value)
    console.log(pokemonList)
  }

  const view = (e) => {
    setPokemonId(e)
    navigate(`/${e}`)
  }

  const reload = () => {
    window.location.reload()
  }

  const scrollToTop = () => {
    window.scrollTo({top:-100, behavior: "smooth"})
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1025")
    .then((result) => {
      setPokemonList(loopPokemon(result.data, searchPokemon))
      // loopPokemon2(result.data, searchPokemon)
    })
    .catch((error) => {
      console.log(error)
    })
  },[searchPokemon])

  return (
    <div className='mobileMain'>
      <div className='mobileHeader'>
        <div className='title'>
          <TbPokeball size={"4.8rem"} color='white' onClick={reload} cursor={"pointer"}/>
          <p>Matthew's Pokédex</p>
        </div>
        <form className='desktopSearch'>
          <input className='input' type="text" placeholder='Search' onChange={search}/>
        </form>
        <form className='mobileSearch' onSubmit={search2}>
          <input className='input' type="text" placeholder='Search'/>
          <button><FaMagnifyingGlass color='#d3093e'/></button>
        </form>
      </div>
      <div className='mobileContent'>
          {
            pokemonList.map((item, index) => (
              <div href="#url" target="_blank" className='pokemonCard' onClick={() => view(item[0])} key={index}>
                <p className='pokemonId'>#{item[0]}</p>
                {/* <img className='pokemonImg' src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`} alt="pokemon"/> */}
                <img className='pokemonImg' src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${item[0]}.png`} alt="pokemon"/>
                <p className='pokemonName'>{item[1]}</p>
                <div className='mainTypes'>
                  <p className='type' style={{backgroundColor: `${colorType(getTypes(item[0])[0])}`}}>{getTypes(item[0])[0]}</p>
                  {getTypes(item[0])[1] ? <p className='type' style={{backgroundColor: `${colorType(getTypes(item[0])[1])}`}}>{getTypes(item[0])[1]}</p> : ""}
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Mobile