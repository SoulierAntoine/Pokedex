import { ID } from '@libs/ddd/domain/value-objects/id.value-object';

export class Entity<T> {
  private readonly _id: ID<T>;

  get id(): ID<T> {
    return this._id;
  }

  constructor(id) {
    this._id = id;
  }
}
