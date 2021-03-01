import { Ref } from "./ref";

interface ExerciseData {
  name: string;
  description: string;
  video?: string;
}

export interface RawExercise {
  ref: Ref;
  data: ExerciseData;
}

export interface Exercise extends ExerciseData {
  id: string;
}
