import { ExcerciseEntity } from '../../excercises/excercise.entity';
export class ExcerciseSetDto {
  id?: number;
  name: string;
  excercises: ExcerciseEntity[];
}
