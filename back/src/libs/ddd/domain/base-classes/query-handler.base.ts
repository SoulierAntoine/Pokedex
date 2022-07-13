import { Result } from 'oxide.ts';
// import { IQueryHandler } from '@nestjs/cqrs';

export abstract class Query {}

export abstract class QueryHandlerBase /* implements IQueryHandler */ {
  abstract handle(query: Query): Promise<Result<unknown, Error>>;

  execute(query: Query): Promise<Result<unknown, Error>> {
    return this.handle(query);
  }
}
