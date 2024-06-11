import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Text from './Components/Text';
import { SiPokemon } from "react-icons/si";
import Mobile from './Components/Mobile';
import SingleView from './Components/SingleView';

function App() {
  const [searchPokemon, setSearchPokemon] = useState("")
  const [pokemonId, setPokemonId] = useState("")
  const [version, setVersion] = useState(1)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <SiPokemon size={"24rem"}/>
          <Main searchPokemon={searchPokemon}/>
          <Text setSearchPokemon={setSearchPokemon}/> */}
          <Route path='/' element={<Mobile pokemonId={pokemonId} setPokemonId={setPokemonId}/>}/>
          <Route path={`/${pokemonId}`} element={<SingleView pokemonId={pokemonId} setPokemonId={setPokemonId}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
