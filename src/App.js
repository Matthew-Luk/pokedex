import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Text from './Components/Text';
import { SiPokemon } from "react-icons/si";
import Mobile from './Components/Mobile';

function App() {
  const [searchPokemon, setSearchPokemon] = useState("")

  return (
    <div className="App">
      {/* <SiPokemon size={"24rem"}/>
      <Main searchPokemon={searchPokemon}/>
      <Text searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon}/> */}
      <Mobile/>
    </div>
  );
}

export default App;
