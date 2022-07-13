import React, { useCallback, useEffect, useState } from 'react';
import { IPokemon } from '../types/IPokemon';
import PokemonItem from './PokemonItem';
import ReactPaginate from 'react-paginate';

const PokemonItems = ({ pokemon }: { pokemon: IPokemon[] }) => {
  return (
    <>
      {pokemon.map((pokemon: IPokemon) => (
        <PokemonItem key={pokemon.id} id={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} />
      ))}
    </>
  );
};

const PokemonList = () => {

  const itemsPerPage = 5;

  const [pokemon, updatePokemonList] = useState<IPokemon[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(pokemon);
  const [itemOffset, setItemOffset] = useState(0);

  const fetchData = useCallback(async () => {
    // TODO: there may be a way to avoid repeating query by keeping in memory previously requested pokemon
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/pokemon?limit=${itemsPerPage}&offset=${itemOffset}`
    );
    const data = await response.json();
    const newPokemon = [...data.pokemonList];
    updatePokemonList(newPokemon);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = newPokemon.slice(0, endOffset);
    setCurrentItems(currentItems);

    const pageCount = Math.ceil(data.total / itemsPerPage);
    setPageCount(pageCount);
  }, [itemOffset]);

  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [fetchData]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % pageCount;
    setItemOffset(newOffset);
  };

  return (
    <div className='pokemonList'>
      <section className='overflow-hidden text-gray-700'>
        <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            <PokemonItems pokemon={currentItems} />
          </div>
        </div>
      </section>

      <div className='pagination' style={{display: 'flex', justifyContent: 'center'}}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default PokemonList;
