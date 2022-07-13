import { PokemonListAggregate } from '@modules/pokemon/domain/entities/pokemon-list.entity';
import { PokemonEntity } from '@modules/pokemon/domain/entities/pokemon.entity';

export interface PokemonApiResponse {
  count: number;
  results: {
    id: number;
    name: string;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  }[];
}

export class PokemonApiMapper {
  toDomainEntity(response: PokemonApiResponse): PokemonListAggregate {
    return new PokemonListAggregate(
      response.count,
      response.results.map((pokemon) => {
        return new PokemonEntity(
          pokemon.id,
          pokemon.name,
          pokemon.sprites.other['official-artwork'].front_default,
          null,
        );
      }),
    );
  }
}
