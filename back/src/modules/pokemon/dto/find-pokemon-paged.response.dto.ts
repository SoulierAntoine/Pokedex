import { ApiProperty } from '@nestjs/swagger';
import { PokemonListAggregate } from '@modules/pokemon/domain/entities/pokemon-list.entity';
import { ID } from '@libs/ddd/domain/value-objects/id.value-object';

export class PokemonResponse {
  constructor(id: ID<number>, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  @ApiProperty({
    description: "Pokemon's ID",
  })
  id: ID<number>;

  @ApiProperty({
    description: "Pokemon's name",
  })
  name: string;

  @ApiProperty({
    description: "URL to Pokemon's default image",
  })
  imageUrl: string;
}

export class FindPokemonPagedResponse {
  constructor(pokemonListAggregate: PokemonListAggregate) {
    this.total = pokemonListAggregate.total;
    this.pokemonList = pokemonListAggregate.pokemonList.map((pokemon) => {
      return new PokemonResponse(pokemon.id, pokemon.name, pokemon.imageUrl);
    });
  }

  @ApiProperty({
    description: 'Number of total result',
  })
  total: number;

  @ApiProperty({
    description: 'List of pokemon',
  })
  pokemonList: PokemonResponse[];
}
