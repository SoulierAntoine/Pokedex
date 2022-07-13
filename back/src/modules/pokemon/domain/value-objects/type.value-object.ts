import { ValueObject } from '@libs/ddd/domain/base-classes/value-object.base';

export interface TypeProps {
  slot: number;
  type: string;
}

export class Type extends ValueObject<TypeProps> {}
