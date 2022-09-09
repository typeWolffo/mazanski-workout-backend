import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ExcerciseSetDto } from './DTO/excerciseSet.dto';
import { ExcerciseSetsService } from './excercise-sets.service';

@Controller('excercise-sets')
export class ExcerciseSetsController {
  constructor(private excerciseSetService: ExcerciseSetsService) {}

  @Post('/create')
  async create(@Body() excerciseSet: ExcerciseSetDto) {
    return this.excerciseSetService.create(excerciseSet);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.excerciseSetService.findOne(id);
  }

  @Get('/')
  async find() {
    return this.excerciseSetService.findAll();
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.excerciseSetService.delete(id);
  }
}
