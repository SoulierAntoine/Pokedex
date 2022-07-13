import { QueryHandlerBase } from '@libs/ddd/domain/base-classes/query-handler.base';
import { QueryHandler } from '@nestjs/cqrs';
import { FindPokemonPagedQuery } from '@modules/pokemon/queries/find-pokemon-paged.query';
import { Inject } from '@nestjs/common';
import { PokemonAdapter } from '@modules/pokemon/services/pokemon.adapter';
import { Ok, Result } from 'oxide.ts';
import { PokemonEntity } from '@modules/pokemon/domain/entities/pokemon.entity';

@QueryHandler(FindPokemonPagedQuery)
export class FindPokemonQueryHandler extends QueryHandlerBase {
  constructor(@Inject(PokemonAdapter) private readonly pokemonAdapter) {
    super();
  }

  async handle(query: FindPokemonPagedQuery): Promise<Result<PokemonEntity[], Error>> {
    const pokemon = await this.pokemonAdapter.findPokemonPaged(query);
    return Ok(pokemon);
  }
}
