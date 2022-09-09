import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExcerciseSetEntity } from '../excercise-sets/excercise-set.entity';

@Entity('excercises')
export class ExcerciseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  yt_url?: string;

  @ManyToMany(
    () => ExcerciseSetEntity,
    (excerciseSet) => excerciseSet.excercises,
  )
  excerciseSets: ExcerciseSetEntity[];
}
