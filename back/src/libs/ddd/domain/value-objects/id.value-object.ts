import { ValueObject } from '@libs/ddd/domain/base-classes/value-object.base';

export abstract class ID<T> extends ValueObject<T> {
  protected constructor(props: T) {
    super(props);
  }
}
