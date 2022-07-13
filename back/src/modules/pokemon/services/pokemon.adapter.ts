import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PokemonAdapterPort } from '@modules/pokemon/services/pokemon.adapter.port';
import { PokemonApiMapper } from '@modules/pokemon/services/pokemon.api-mapper';
import { FindPokemonPagedQuery } from '@modules/pokemon/queries/find-pokemon-paged.query';
import { PokemonListAggregate } from '@modules/pokemon/domain/entities/pokemon-list.entity';

@Injectable()
export class PokemonAdapter implements PokemonAdapterPort {
  private httpClient: AxiosInstance;
  private mapper: PokemonApiMapper;

  constructor(private configService: ConfigService) {
    this.httpClient = axios.create({
      baseURL: this.configService.get('POKE_API_URL'),
    });
    this.mapper = new PokemonApiMapper();
  }

  async findPokemonPaged(query: FindPokemonPagedQuery): Promise<PokemonListAggregate> {
    const apiFindPokemonPagedResponse = await this.httpClient.get('pokemon', {
      params: {
        limit: query.limit,
        offset: query.offset,
      },
    });

    const apiPokemonPagedResults = apiFindPokemonPagedResponse.data.results;

    // Do another query to get the image
    const apiPokemonByIdRequestP = apiPokemonPagedResults.map((p) => this.httpClient.get(`pokemon/${p.name}`));
    const apiFindPokemonByNameResponse = await Promise.all(apiPokemonByIdRequestP);
    const pokemonList = apiFindPokemonByNameResponse.map(({ data }) => data);

    return this.mapper.toDomainEntity({ results: pokemonList, count: apiFindPokemonPagedResponse.data.count });
  }
}
