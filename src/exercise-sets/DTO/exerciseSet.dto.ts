import { ExerciseEntity } from '../../exercises/exercise.entity';
export class ExerciseSetDto {
  id?: number;
  name: string;
  exercises: ExerciseEntity[];
}
