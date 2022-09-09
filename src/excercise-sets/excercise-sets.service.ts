import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ExcerciseSetDto } from './DTO/excerciseSet.dto';
import { ExcerciseSetEntity } from './excercise-set.entity';

@Injectable()
export class ExcerciseSetsService {
  constructor(
    @InjectRepository(ExcerciseSetEntity)
    private excercisesRepository: Repository<ExcerciseSetEntity>,
  ) {}

  findAll(): Promise<ExcerciseSetEntity[]> {
    return this.excercisesRepository.find();
  }

  findOne(id: number): Promise<ExcerciseSetEntity> {
    return this.excercisesRepository.findOne({ where: { id: id } });
  }

  create(excerciseData: ExcerciseSetDto): Promise<ExcerciseSetEntity> {
    return this.excercisesRepository.save(excerciseData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.excercisesRepository.delete(id);
  }
}
