import React, {FC} from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
};

export default App;
