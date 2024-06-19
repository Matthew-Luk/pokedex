import React, { useEffect } from 'react'
import axios from 'axios'

const Script = () => {

  const search = (e, map) => {
    let arr = []
    axios.get(`https://pokeapi.co/api/v2/pokemon/${e}/`)
    .then((result) => {
      for(let i of result.data.types){
        arr.push(i.type.name)
      }
      map[result.data.id] = arr
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(map)
    return arr
  }

  useEffect(() => {
    let map = {}
    for(let i = 0; i < 1025; i++){
      search(i, map)
    }
  })


  return (
    <div>

    </div>
  )
}

export default Script