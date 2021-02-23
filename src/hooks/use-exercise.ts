export default function useExercise(exerciseId?: number) {
  return {
    name: "Some exercise name",
    description: "Some exercise description",
    id: exerciseId,
    video: "",
  };
}
