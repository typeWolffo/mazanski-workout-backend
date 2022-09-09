import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExerciseDto } from './DTO/exercise.dto';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Post('/create')
  async create(@Body() exercise: ExerciseDto) {
    return this.exercisesService.create(exercise);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.exercisesService.findOne(id);
  }

  @Get('/')
  async find() {
    return this.exercisesService.findAll();
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.exercisesService.delete(id);
  }
}
