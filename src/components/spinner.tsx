import * as React from "react";
import { styled, keyframes } from "@filbert-js/core";

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return <Dot className={className} />;
}

const bounce = keyframes`
to {
    transform: scale(0.6);
    opacity: 0.2;
}
`;

const Dot = styled("div")`
  width: 50px;
  height: 50px;
  animation: ${bounce} 0.5s linear infinite alternate;
  background-color: var(--main-color);
  border-radius: 50%;
`;
