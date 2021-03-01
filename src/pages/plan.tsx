import * as React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import useRoutine from "../hooks/use-routine";
import Spinner from "../components/spinner";

export default function Plan(props: RouteComponentProps) {
  const { data: routine, isLoading } = useRoutine();

  return (
    <WRAPPER>
      <PLAN>
        {isLoading ? <SPINNER /> : null}
        {routine?.blocks.map((block) => (
          <FIELDSET key={block.name}>
            <legend>{block.name}</legend>
            {block.exercises.map((exercise, idx) => (
              <LINK
                to={`/exercise/${exercise.exercise.id}`}
                state={{ exercise }}
                key={exercise.exercise.id + idx}
              >
                <Button type="button">{exercise.exercise.name}</Button>
              </LINK>
            ))}
          </FIELDSET>
        ))}
      </PLAN>
    </WRAPPER>
  );
}

const SPINNER = styled(Spinner)`
  margin: 40px auto;
  display: block;
`;

const WRAPPER = styled(Wrapper)`
  padding-bottom: 30px;
`;

const PLAN = styled("div")`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 32px;
  border-radius: 4px;
  width: 100%:
`;

const FIELDSET = styled("fieldset")`
  border: 2px solid var(--main-color);
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }

  legend {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const LINK = styled(Link)`
  color: currentColor;
  text-decoration: none;
  display: flex;
  width: 100%;

  button {
    width: 100%;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
