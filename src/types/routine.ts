import { HydratedBlock } from "./blocks";
import { Ref } from "./ref";

interface RoutineData {
  name: string;
  blocks: {
    [key: string]: string;
  };
}

export interface RawRoutine {
  ref: Ref;
  data: RoutineData;
}

export interface Routine extends RoutineData {
  id: string;
}

export interface HydratedRoutine {
  id: string;
  name: string;
  blocks: HydratedBlock[];
}
