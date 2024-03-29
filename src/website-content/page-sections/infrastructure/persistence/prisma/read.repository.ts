import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { HomeQuestionsContentItemDto } from '~/page-sections/application/dto/home-questions/home-questions-content-item.dto';
import { HeaderWithHrefDto } from '~/page-sections/application/dto/section/header-with-href.dto';
import { HeaderWithParentLinkDto } from '~/page-sections/application/dto/section/header-with-parent-link.dto';
import { ReadRepository } from '~/page-sections/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HeaderWithParentLinkMapper } from './mappers/header-with-parent-link.mapper.';
import { HeaderMapper } from './mappers/header.mapper';
import { HomeQuestionsContentItemsMapper } from './mappers/home-questions-content-items.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHeader(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithHrefDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: pageAlias,
          section: sectionAlias,
        },
      },
      select: {
        primaryHeading: true,
        secondaryHeading: true,
        href: true,
      },
    });

    if (!header) {
      return null;
    }

    return HeaderMapper.mapToDto(header);
  }

  async getHeaderWithParentLink(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithParentLinkDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: pageAlias,
          section: sectionAlias,
        },
      },
      select: PrismaReadRepository.headerWithParentLinkSelect,
    });

    if (!header) {
      return null;
    }

    return HeaderWithParentLinkMapper.mapToDto(header);
  }

  async getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]> {
    const sections = await this.prismaService.pageSection.findMany({
      where: { page: 'home', NOT: { section: 'questions' } },
      select: {
        secondaryHeading: true,
        href: true,
      },
    });

    return HomeQuestionsContentItemsMapper.mapToDto(sections);
  }

  static headerWithParentLinkSelect =
    Prisma.validator<Prisma.PageSectionSelect>()({
      primaryHeading: true,
      secondaryHeading: true,
      parent: {
        select: {
          primaryHeading: true,
          secondaryHeading: true,
          href: true,
        },
      },
    });

  static headerWithParentLink =
    Prisma.validator<Prisma.PageSectionDefaultArgs>()({
      select: PrismaReadRepository.headerWithParentLinkSelect,
    });
}
