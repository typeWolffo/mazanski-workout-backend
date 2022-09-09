import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercise.entity';
import { ExcercisesController } from './excercises.controller';
import { ExcercisesService } from './excercises.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExcerciseEntity])],
  providers: [ExcercisesService],
  controllers: [ExcercisesController],
})
export class ExcercisesModule {}
