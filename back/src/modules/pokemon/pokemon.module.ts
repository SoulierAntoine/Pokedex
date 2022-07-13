import { Module } from '@nestjs/common';
import { PokemonAdapter } from './services/pokemon.adapter';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { FindPokemonController } from './queries/find-pokemon.controller';
import { FindPokemonQueryHandler } from '@modules/pokemon/queries/find-pokemon.query-handler';

const httpControllers = [FindPokemonController];

const adapters = [PokemonAdapter];

const queryHandlers = [FindPokemonQueryHandler];

@Module({
  imports: [ConfigModule, CqrsModule],
  controllers: [...httpControllers],
  providers: [...adapters, ...queryHandlers],
})
export class PokemonModule {}
