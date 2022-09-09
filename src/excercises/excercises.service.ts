import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ExcerciseDto } from './DTO/excercise.dto';
import { ExcerciseEntity } from './excercise.entity';

@Injectable()
export class ExcercisesService {
  constructor(
    @InjectRepository(ExcerciseEntity)
    private excercisesRepository: Repository<ExcerciseEntity>,
  ) {}

  findAll(): Promise<ExcerciseEntity[]> {
    return this.excercisesRepository.find();
  }

  findOne(id: number): Promise<ExcerciseEntity> {
    return this.excercisesRepository.findOne({ where: { id: id } });
  }

  create(excerciseData: ExcerciseDto): Promise<ExcerciseEntity> {
    return this.excercisesRepository.save(excerciseData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.excercisesRepository.delete(id);
  }
}
