import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `search movie with title after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `one movie: ${movieId}`;
  }

  @Post()
  createOne(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  deleteOne(@Param('id') movieId: string) {
    return `delete movie: ${movieId}`;
  }

  @Patch(':id')
  updateOne(@Param('id') movieId: string, @Body() updateData) {
    return { updateMovie: movieId, ...updateData };
  }
}
