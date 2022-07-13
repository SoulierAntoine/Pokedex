import { v4 as uuidV4 } from 'uuid';
import { ID } from '@libs/ddd/domain/value-objects/id.value-object';

export class UUID extends ID<string> {
  constructor(value: string) {
    super(value);
  }

  /**
   *Returns new ID instance with randomly generated ID value
   * @static
   * @return {*}  {ID}
   * @memberof ID
   */
  static generate(): UUID {
    return new UUID(uuidV4());
  }
}
