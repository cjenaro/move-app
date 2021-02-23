import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";

export default function Exercise(
  props: RouteComponentProps<{ exerciseId: number }>
) {
  return <EXERCISE>EXERCISE {props.exerciseId}</EXERCISE>;
}

const EXERCISE = styled("div")`
  background-color: var(--main-color);
`;
