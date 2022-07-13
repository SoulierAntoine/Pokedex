import { Query } from '@libs/ddd/domain/base-classes/query-handler.base';

export class FindPokemonPagedQuery extends Query {
  constructor(props: FindPokemonPagedQuery) {
    super();
    this.limit = props.limit;
    this.offset = props.offset;
  }

  readonly limit?: number;
  readonly offset?: number;
}
