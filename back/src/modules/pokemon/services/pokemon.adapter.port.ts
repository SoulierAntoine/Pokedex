import { FindPokemonPagedQuery } from '@modules/pokemon/queries/find-pokemon-paged.query';
import { PokemonListAggregate } from '@modules/pokemon/domain/entities/pokemon-list.entity';

export interface PokemonAdapterPort {
  findPokemonPaged(query: FindPokemonPagedQuery): Promise<PokemonListAggregate>;
}
