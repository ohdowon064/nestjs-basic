import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `one movie: ${movieId}`;
  }

  @Post()
  createOne() {
    return 'create movie';
  }

  @Delete('/:id')
  deleteOne(@Param('id') movieId: string) {
    return `delete movie: ${movieId}`;
  }

  @Patch('/:id')
  updateOne(@Param('id') movieId: string) {
    return `update movie: ${movieId}`;
  }
}
