import React, { useState, useEffect } from 'react'
import { capitalize, colorType, loopStats, loopTypes } from './Functions'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { VscSymbolRuler } from "react-icons/vsc";
import { IoMoveSharp } from "react-icons/io5";

const SingleView = (props) => {
  const [pokemon, setPokemon] = useState({})
  const {pokemonId, setPokemonId} = props
  const navigate = useNavigate()

  const home = () => {
    navigate('/')
  }

  const leftClick = () => {
    if(pokemon.id === 1){
      setPokemonId(1025)
      navigate(`/${1025}`)
    }else{
      setPokemonId(pokemon.id - 1)
      navigate(`/${pokemon.id - 1}`)
    }
  }

  const rightClick = () => {
    if(pokemon.id === 1025){
      setPokemonId(1)
      navigate(`/${1}`)
    }else{
      setPokemonId(pokemon.id + 1)
      navigate(`/${pokemon.id + 1}`)
    }
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then((result) => {
      console.log(result.data)
      setPokemon({
        image: `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
        // image: result.data.sprites.other.showdown.front_default,
        name: capitalize(result.data.name),
        id: result.data.id,
        types: loopTypes(result.data.types), 
        // type1: result.data.types[0].type.name,
        weight: result.data.weight,
        height: result.data.height,
        stats: loopStats(result.data.stats)
      })
      // if(result.data.types.length === 2){
      //   setPokemon({
      //     image: `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      //     // image: result.data.sprites.other.showdown.front_default,
      //     name: capitalize(result.data.name),
      //     id: result.data.id,
      //     type1: result.data.types[0].type.name,
      //     type2: result.data.types[1].type.name,
      //     weight: result.data.weight,
      //     height: result.data.height,
      //     stats: loopStats(result.data.stats)
      //     // hp: result.data.stats[0],
      //     // attack: result.data.stats[1],
      //     // defense: result.data.stats[2],
      //     // specialAttack: result.data.stats[3],
      //     // specialDefense: result.data.stats[4],
      //     // speed: result.data.stats[5],
      //     // moves:
      //   })
      // }
    })
    .catch((error) => {
      console.log(error)
    })
  },[pokemonId])

  return (
    <div className='singleViewPage' style={{backgroundColor: `${pokemon.types? `${colorType(pokemon.types[0])}` : ""}`}}>
      <div className='singleViewContent'>
        <div className='singleViewTitle'>
          <IoHomeOutline size={"2.4rem"} color='white' onClick={home} cursor={"pointer"}/>
          <p>{pokemon.name} #{pokemon.id}</p>
        </div>
        <div className='imageBlock'>
          <MdOutlineKeyboardArrowLeft size={"4.8rem"} cursor={"pointer"} color='white' onClick={leftClick}/>
          <img src={pokemon.image} alt="" />
          <MdOutlineKeyboardArrowRight size={"4.8rem"} cursor={"pointer"} color='white' onClick={rightClick}/>
        </div>
        <div className='singleViewCard'>
          <div className='types'>
            {/* <p style={{backgroundColor: `${colorType(pokemon.type1)}`}}>{pokemon.type1}</p>
            {pokemon.type2 ? <p style={{backgroundColor: `${colorType(pokemon.type2)}`}}>{pokemon.type2}</p> : ""} */}
            {
              pokemon.types ?
              pokemon.types.map((item, index) => (
                <p key={index} style={{backgroundColor: `${colorType(item)}`}}>{item}</p>
              )):
              ""
            }
          </div>
          <strong>About</strong>
          <div className='aboutSection'>
            <div className='aboutCategory'>
              <p>{pokemon.weight / 10} kg</p>
              <div className='aboutDescriptor'>
                <TbWeight />
                <p>Weight</p>
              </div>
            </div>
            <div className='aboutCategory'>
              <p>{pokemon.height / 10} meters</p>
              <div className='aboutDescriptor'>
                <VscSymbolRuler />
                <p>Height</p>
              </div>
            </div>
            <div className='aboutCategory'>
              <div className='aboutDescriptor'>
                <IoMoveSharp />
                <p>Moves</p>
              </div>
            </div>
          </div>
          <strong>Base Stats</strong>
          <div className='baseStats'>
            {
              pokemon.stats ?
              pokemon.stats.map((item, index) => (
                <div className='stat' key={index} style={{color: `${colorType(pokemon.types[0])}`}}>
                  <p className='statLeft' style={{borderRight: `0.1rem solid ${colorType(pokemon.types[0])}`}}>{item}</p>
                  <div className='statBar' style={{backgroundColor: `${colorType(pokemon.types[0])}`}}>
                    <div className='percentBar' style={{width: `${parseInt(item[1]) > 100 ? "100%" : `${parseInt(item[1])}%`}`}}>
                    </div>
                  </div>
                </div>
              ))
              :
              ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleView