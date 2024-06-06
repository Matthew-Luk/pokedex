import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Text from './Components/Text';

function App() {
  const [searchPokemon, setSearchPokemon] = useState("")

  return (
    <div className="App">
      <Main searchPokemon={searchPokemon}/>
      <Text searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon}/>
    </div>
  );
}

export default App;
