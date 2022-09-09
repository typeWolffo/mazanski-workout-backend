import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ExerciseDto } from './DTO/exercise.dto';
import { ExerciseEntity } from './exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExerciseEntity)
    private exercisesRepository: Repository<ExerciseEntity>,
  ) {}

  findAll(): Promise<ExerciseEntity[]> {
    return this.exercisesRepository.find();
  }

  findOne(id: number): Promise<ExerciseEntity> {
    return this.exercisesRepository.findOne({ where: { id: id } });
  }

  create(exerciseData: ExerciseDto): Promise<ExerciseEntity> {
    return this.exercisesRepository.save(exerciseData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.exercisesRepository.delete(id);
  }
}
