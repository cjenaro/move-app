import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";
import useExercise from "../hooks/use-exercise";
import Button from "../components/button";

export default function Exercise(
  props: RouteComponentProps<{ exerciseId: number }>
) {
  const exercise = useExercise(props.exerciseId);

  return (
    <EXERCISE>
      <p>{exercise.name}</p>
      <p>{exercise.description}</p>
      <p>{exercise.id}</p>
      <Button variant="outlined" type="button">
        Ver Video
      </Button>
    </EXERCISE>
  );
}

const EXERCISE = styled("div")`
  background-color: var(--main-color);
`;
