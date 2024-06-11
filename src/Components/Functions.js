export function loopTypes(e){
  let arr = []
  arr.push(e[0].type.name)
  if(e.length === 2){
    arr.push(e[1].type.name)
  }
  return arr
}

export function loopPokemon(e){
  let arr = []
  for(let i of e.results){
    arr.push(i.name)
  }
  return arr
}

export function capitalize(e){
  if(e !== undefined){
    return e[0].toUpperCase() + e.slice(1)
  }
}

export function colorType(e){
  let colors = {
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
    steel: "#b8b8d0",
    fairy: "#f0b6bc"
  }
  return colors[e]
}