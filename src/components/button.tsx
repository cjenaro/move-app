import { styled } from "@filbert-js/core";
import * as React from "react";

type ButtonType = "submit" | "button";

type ButtonVariant = "contained" | "outlined";

function toVoid() {}

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: ButtonType;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

function getVariationStyles(variant?: ButtonVariant) {
  switch (variant) {
    case "contained":
    default:
      return `
        border-color: transparent;
        color: #ffffff;
        background-color: var(--main-color);
      `;
    case "outlined":
      return `
        border-color: var(--main-color);
        color: var(--main-color);
        background-color: transparent;
      `;
  }
}

export default function Button(props: ButtonProps) {
  return (
    <BUTTON
      type={props.type}
      onClick={props.onClick || toVoid}
      variant={props.variant}
      className={props.className}
    >
      {props.children}
    </BUTTON>
  );
}

const BUTTON = styled("button")<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;

  ${(props: ButtonProps) => getVariationStyles(props.variant)}
`;
