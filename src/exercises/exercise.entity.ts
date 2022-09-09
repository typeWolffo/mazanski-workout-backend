import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseSetEntity } from '../exercise-sets/exercise-set.entity';

@Entity('exercises')
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  yt_url?: string;

  @ManyToMany(() => ExerciseSetEntity, (exerciseSet) => exerciseSet.exercises)
  exerciseSets: ExerciseSetEntity[];
}
