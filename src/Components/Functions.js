export function loop(e){
  let arr = []
  arr.push(capitalize(e[0].type.name))
  if(e.length === 2){
    arr.push(capitalize(e[1].type.name))
  }
  return arr.join(" & ")
}

export function capitalize(e){
  if(e !== undefined){
    return e[0].toUpperCase() + e.slice(1)
  }
}
