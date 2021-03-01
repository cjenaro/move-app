import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";
import Button from "../components/button";
import { Exercise as ExerciseType } from "../types/exercises";
import Wrapper from "../components/wrapper";

interface ExerciseState {
  exercise: {
    series: string;
    reps: string;
    exercise: ExerciseType;
  };
}

export default function Exercise(
  props: RouteComponentProps<{ exerciseId: number }>
) {
  const [video, setVideo] = React.useState(false);
  const exercise = (props?.location?.state as ExerciseState)?.exercise;

  function toggleVideo() {
    setVideo(!video);
  }

  return (
    <WRAPPER>
      <EXERCISE>
        <TITLE>{exercise.exercise.name}</TITLE>
        <DESCRIPTION>{exercise.exercise.description}</DESCRIPTION>
        <BUTTON variant="outlined" type="button" onClick={toggleVideo}>
          Ver Video
        </BUTTON>
        {exercise?.exercise?.video ? (
          <VIDEO active={video} src={exercise.exercise.video} controls />
        ) : null}
      </EXERCISE>
    </WRAPPER>
  );
}

const VIDEO = styled("video")<{ active: boolean }>`
  max-height: ${(props: { active: boolean }) => (props.active ? "100vh" : 0)};
  opacity: ${(props: { active: boolean }) => (props.active ? 1 : 0)};
  transition: max-height 1s ease, opacity 0.3s ease 0.3s;
  will-change: max-heigh, opacity;
  width: 100%;
  transform-origin: 50% 0;
  margin-top: 30px;
`;

const BUTTON = styled(Button)`
  margin: 0 auto;
  display: block;
`;

const TITLE = styled("h1")`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
`;

const DESCRIPTION = styled("p")`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.1em;
  text-align: left;
`;

const WRAPPER = styled(Wrapper)`
  padding-bottom: 30px;
`;

const EXERCISE = styled("div")`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 32px;
  border-radius: 4px;
  width: 100%:
`;
