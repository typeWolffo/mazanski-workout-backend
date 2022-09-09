import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ExerciseSetDto } from './DTO/exerciseSet.dto';
import { ExerciseSetEntity } from './exercise-set.entity';

@Injectable()
export class ExerciseSetsService {
  constructor(
    @InjectRepository(ExerciseSetEntity)
    private exercisesRepository: Repository<ExerciseSetEntity>,
  ) {}

  findAll(): Promise<ExerciseSetEntity[]> {
    return this.exercisesRepository.find();
  }

  findOne(id: number): Promise<ExerciseSetEntity> {
    return this.exercisesRepository.findOne({ where: { id: id } });
  }

  create(exerciseData: ExerciseSetDto): Promise<ExerciseSetEntity> {
    return this.exercisesRepository.save(exerciseData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.exercisesRepository.delete(id);
  }
}
