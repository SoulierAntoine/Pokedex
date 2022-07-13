import { Entity } from '@libs/ddd/domain/base-classes/entity.base';
import { Type } from '@modules/pokemon/domain/value-objects/type.value-object';

export class PokemonEntity extends Entity<number> {
  name: string;
  imageUrl: string;
  type: Type;

  constructor(id: number, name: string, imageUrl: string, type: Type) {
    super(id);
    this.name = name;
    this.imageUrl = imageUrl;
    this.type = type;
  }
}
