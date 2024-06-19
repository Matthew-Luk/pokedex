import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Mobile from './Components/Mobile';
import SingleView from './Components/SingleView';
import Script from './Components/Script';

function App() {
  const [pokemonId, setPokemonId] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mobile pokemonId={pokemonId} setPokemonId={setPokemonId}/>}/>
          <Route path={`/${pokemonId}`} element={<SingleView pokemonId={pokemonId} setPokemonId={setPokemonId}/>} />
          <Route path='/test' element={<Script />} />
          <Route path='*' element={<SingleView pokemonId={pokemonId} setPokemonId={setPokemonId}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
