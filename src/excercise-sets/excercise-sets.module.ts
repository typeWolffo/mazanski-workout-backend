import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseSetEntity } from './excercise-set.entity';
import { ExcerciseSetsController } from './excercise-sets.controller';
import { ExcerciseSetsService } from './excercise-sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExcerciseSetEntity])],
  providers: [ExcerciseSetsService],
  controllers: [ExcerciseSetsController],
})
export class ExcerciseSetsModule {}
