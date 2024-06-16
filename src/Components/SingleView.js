import React, { useState, useEffect } from 'react'
import { capitalize, colorType, loopStats, loopTypes, loopAbilities } from './Functions'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { VscSymbolRuler } from "react-icons/vsc";
import { IoMoveSharp } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";

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
        weight: result.data.weight,
        height: result.data.height,
        color: colorType(result.data.types[0].type.name),
        stats: loopStats(result.data.stats),
        moves: loopAbilities(result.data.abilities)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },[pokemonId])

  return (
    <div className='singleViewPage' style={{backgroundColor: `${pokemon.color}`}}>
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
            {
              pokemon.types 
              ?
              pokemon.types.map((item, index) => (
                <p key={index} style={{backgroundColor: `${colorType(item)}`}}>{item}</p>
              ))
              :
              ""
            }
          </div>
          <div className='aboutSection'>
            <div className='aboutCategory breakline'>
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
          </div>
          <div className='abilities'>
            <div className='moveList'>
              <div className='moves'>
                {
                  pokemon.moves
                  ?
                  pokemon.moves.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                  :
                  ""
                }
              </div>
              <div className='aboutDescriptor'>
                <IoMoveSharp />
                <p>Moves</p>
              </div>
            </div>
          </div>
          <div className='baseStats'>
            <div className='aboutDescriptor mb12'>
              <IoIosStats size={"1.6rem"}/>
              <strong>Base Stats</strong>
            </div>
            {
              pokemon.stats
              ?
              pokemon.stats.map((item, index) => (
                <div key={index} className='stat' style={{color: `${pokemon.color}`}}>
                  <p className='statLeft' style={{borderRight: `0.1rem solid ${pokemon.color}`}}>{item}</p>
                  <div className='statBar' style={{backgroundColor: `${pokemon.types[1] ? `${colorType(pokemon.types[1])}` : "#E5E4E2"}`}}>
                    <div className='percentBar' style={{backgroundColor: `${pokemon.color}`, width: `${parseInt(item[1]) > 100 ? "100%" : `${parseInt(item[1])}%`}`}}></div>
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