import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseEntity } from '../exercises/exercise.entity';

@Entity('exerciseSets')
export class ExerciseSetEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToMany(() => ExerciseEntity, (exercise) => exercise.exerciseSets)
  exercises: ExerciseEntity[];
}
