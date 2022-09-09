import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ExerciseSetDto } from './DTO/exerciseSet.dto';
import { ExerciseSetsService } from './exercise-sets.service';

@Controller('exercise-sets')
export class ExerciseSetsController {
  constructor(private exerciseSetService: ExerciseSetsService) {}

  @Post('/create')
  async create(@Body() exerciseSet: ExerciseSetDto) {
    return this.exerciseSetService.create(exerciseSet);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.exerciseSetService.findOne(id);
  }

  @Get('/')
  async find() {
    return this.exerciseSetService.findAll();
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.exerciseSetService.delete(id);
  }
}
