import { Controller, Get, Req, Post, Session, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create() {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request): string {
    return 'This actions returns  cats';
  }
  @Get('ab*cd')
  findWildCard(@Session() session): any {
    return {
      text: 'This is wild card route',
      data: session,
    };
  }
  @Get(':id')
  findOne(@Param() params) {
    return `This action returns a #${params.id} cat`;
  }
}
