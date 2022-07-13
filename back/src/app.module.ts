import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from '@modules/pokemon/pokemon.module';

@Module({
  imports: [ConfigModule.forRoot(), PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
