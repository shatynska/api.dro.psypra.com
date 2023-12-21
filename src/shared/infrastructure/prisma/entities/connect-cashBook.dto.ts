import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ConnectCashBookDto {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsUUID(4)
  id?: string;
  @ApiProperty({
    example: 2022,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  title?: string;
}