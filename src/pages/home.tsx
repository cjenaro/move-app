import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";

export default function Home(props: RouteComponentProps) {
  return <HOME>HOME</HOME>;
}

const HOME = styled("div")`
  background-color: var(--main-color);
`;
