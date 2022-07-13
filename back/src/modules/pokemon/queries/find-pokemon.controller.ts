import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { routesV1 } from '@src/infrastructure/configs/app.route';
import { FindPokemonPagedRequest } from '@modules/pokemon/dto/find-pokemon-paged.request.dto';
import { QueryBus } from '@nestjs/cqrs';
import { FindPokemonPagedQuery } from '@modules/pokemon/queries/find-pokemon-paged.query';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FindPokemonPagedResponse } from '@modules/pokemon/dto/find-pokemon-paged.response.dto';
import { Result } from 'oxide.ts';
import { PokemonListAggregate } from '@modules/pokemon/domain/entities/pokemon-list.entity';

@Controller(routesV1.version)
export class FindPokemonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(routesV1.pokemon.root)
  @ApiOperation({ summary: 'Find paged pokemon list' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: FindPokemonPagedResponse,
  })
  async findPokemonPaged(@Query() request: FindPokemonPagedRequest): Promise<FindPokemonPagedResponse> {
    const query = new FindPokemonPagedQuery(request);
    const result: Result<PokemonListAggregate, Error> = await this.queryBus.execute(query);

    return new FindPokemonPagedResponse(result.unwrap());
  }
}
