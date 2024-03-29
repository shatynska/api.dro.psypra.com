import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DimensionItemDto } from '~/dimensions/application/dto/dimension-item.dto';
import { DimensionWithHrefDto } from '~/dimensions/application/dto/dimension-with-href.dto';
import { DimensionWithItemsDto } from '~/dimensions/application/dto/dimension-with-items.dto';
import { ReadRepository } from '~/dimensions/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { DimensionWithHrefMapper } from './mappers/dimension-with-href.mapper';
import { DimensionWithItemsMapper } from './mappers/dimension-with-items.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getDimensionItem(alias: string): Promise<DimensionItemDto | null> {
    const item = await this.prismaService.dimensionItem.findUnique({
      where: { alias: alias },
      select: {
        title: true,
        description: true,
      },
    });

    if (!item) {
      return null;
    }

    return item;
  }

  async getDimensionWithHref(alias: string): Promise<DimensionWithHrefDto> {
    const dimension = await this.prismaService.dimension.findUnique({
      where: {
        alias: alias,
      },
      select: {
        alias: true,
        title: true,
      },
    });

    return DimensionWithHrefMapper.mapToDto(dimension);
  }

  async getDimensionWithItems(
    alias: string,
  ): Promise<DimensionWithItemsDto | null> {
    const dimension = await this.prismaService.dimension.findUnique({
      where: { alias: alias },
      select: PrismaReadRepository.dimensionWithItemsSelect,
    });

    if (!dimension) {
      return null;
    }

    return DimensionWithItemsMapper.mapToDto(dimension);
  }

  static dimensionWithItemsSelect = Prisma.validator<Prisma.DimensionSelect>()({
    alias: true,
    title: true,
    dimensionItems: {
      select: {
        alias: true,
        title: true,
        description: true,
      },
    },
  });

  static dimensionWithItems = Prisma.validator<Prisma.DimensionDefaultArgs>()({
    select: PrismaReadRepository.dimensionWithItemsSelect,
  });
}
