import React from 'react';
import { IPokemon } from '../types/IPokemon';

const PokemonItem = ({ name, imageUrl }: IPokemon) => {
  return (
    <div className="pokemonItem">
      <div className="flex flex-wrap w-1/2 m-2 border-solid rounded-lg border-2 border-rose-300 bg-slate-50">
        <div className="flex flex-wrap w-1/4">
          <h3 className="p-1 w-full capitalize">{name}</h3>
        </div>
        <div className="flex flex-wrap w-3/4">
          <div className="w-full p-1 md:p-2">
            <img alt={`Image of ${name}`} className="block object-cover object-center w-full h-full rounded-lg"
                 src={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
