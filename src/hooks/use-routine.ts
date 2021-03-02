import { useQuery } from "react-query";
import { RawBlock } from "../types/blocks";
import { Exercise, RawExercise } from "../types/exercises";
import { HydratedRoutine, RawRoutine } from "../types/routine";
import useAuth from "./use-auth";
import useFormattedDate from "./use-formatted-date";

interface BlockWithExercise {
  block: RawBlock;
  exercises: RawExercise[];
}

interface RawQueryData {
  routine: RawRoutine;
  blocks: BlockWithExercise[];
}

function toExercise(raw?: RawExercise): Exercise {
  if (!raw)
    return {
      description: "",
      id: "",
      name: "",
    };

  return {
    description: raw.data.description,
    name: raw.data.name,
    id: raw.ref["@ref"].id,
    video: raw.data.video,
  };
}

function parseToHydratedRoutine(rawData: RawQueryData): HydratedRoutine {
  return {
    name: rawData.routine.data.name,
    id: rawData.routine.ref["@ref"].id,
    blocks: rawData.blocks.map((blockAndExercise) => ({
      name: blockAndExercise.block.data.name,
      exercises: blockAndExercise.block.data.exercises.map((exercise) => {
        const raw: RawExercise | undefined = blockAndExercise.exercises.find(
          (ex) => ex.ref["@ref"].id === exercise.exercise
        );

        return {
          series: exercise.series,
          reps: exercise.reps,
          exercise: toExercise(raw),
        };
      }),
    })),
  };
}

export default function useRoutine() {
  const today = useFormattedDate(new Date());
  const { user } = useAuth();

  return useQuery("routine", async () =>
    user?.routines[today]
      ? fetch(`/.netlify/functions/routine?id=${user?.routines[today]}`)
          .then((blob) => blob.json())
          .then(parseToHydratedRoutine)
          .catch((err) => {
            throw new Error(err);
          })
      : "Hoy no hay rutina, el descanso también es importante!"
  );
}
