import { Exercise } from "./exercises";
import { Ref } from "./ref";

interface BlockData {
  name: string;
  exercises: Array<{
    exercise: string;
    series: string;
    reps: string;
  }>;
}

export interface RawBlock {
  ref: Ref;
  data: BlockData;
}

export interface Block extends BlockData {
  id: string;
}

export interface HydratedBlock {
  name: string;
  exercises: Array<{
    series: string;
    reps: string;
    exercise: Exercise;
  }>;
}
