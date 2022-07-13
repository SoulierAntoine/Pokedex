import { IPokemon } from './IPokemon';

export interface IPokemonApiResponse {
  total: number;
  pokemonList: IPokemon[];
}
