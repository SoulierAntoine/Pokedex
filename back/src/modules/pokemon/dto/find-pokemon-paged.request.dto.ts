import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FindPokemonPagedRequest {
  @ApiProperty({
    description: 'Maximum number of result to return',
  })
  @IsInt()
  @IsPositive()
  @Max(20)
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @ApiProperty({
    description: 'Number of result to skip at the start',
  })
  @IsInt()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  offset: number;
}
