import { Entity } from '@libs/ddd/domain/base-classes/entity.base';
import { PokemonEntity } from '@modules/pokemon/domain/entities/pokemon.entity';
import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';

export class PokemonListAggregate extends Entity<string> {
  total: number;
  pokemonList: PokemonEntity[];

  constructor(total: number, pokemonList: PokemonEntity[]) {
    super(UUID.generate());
    this.total = total;
    this.pokemonList = pokemonList;
  }
}
