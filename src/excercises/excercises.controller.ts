import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExcerciseDto } from './DTO/excercise.dto';
import { ExcercisesService } from './excercises.service';

@Controller('excercises')
export class ExcercisesController {
  constructor(private excercisesService: ExcercisesService) {}

  @Post('/create')
  async create(@Body() excercise: ExcerciseDto) {
    return this.excercisesService.create(excercise);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.excercisesService.findOne(id);
  }

  @Get('/')
  async find() {
    return this.excercisesService.findAll();
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.excercisesService.delete(id);
  }
}
