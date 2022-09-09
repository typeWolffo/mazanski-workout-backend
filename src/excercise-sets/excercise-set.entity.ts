import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExcerciseEntity } from '../excercises/excercise.entity';

@Entity('excerciseSets')
export class ExcerciseSetEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToMany(() => ExcerciseEntity, (excercise) => excercise.excerciseSets)
  excercises: ExcerciseEntity[];
}
