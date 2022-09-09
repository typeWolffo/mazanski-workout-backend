import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseSetEntity } from './exercise-set.entity';
import { ExerciseSetsController } from './exercise-sets.controller';
import { ExerciseSetsService } from './exercise-sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseSetEntity])],
  providers: [ExerciseSetsService],
  controllers: [ExerciseSetsController],
})
export class ExerciseSetsModule {}
