import * as React from "react";
import { styled } from "@filbert-js/core";

interface InputProps {
  label?: string;
  htmlFor?: string;
  inverted?: boolean;
  children: React.ReactNode;
}

export default function Input(props: InputProps) {
  return (
    <LABEL htmlFor={props.htmlFor} {...props}>
      <SPAN>{props.label}</SPAN>
      {props.children}
    </LABEL>
  );
}

const LABEL = styled("label")<InputProps>`
  display: flex;
  flex-direction: column;

  .Dropdown-control,
  input,
  textarea {
    background-color: ${(props: InputProps) =>
      props.inverted ? "rgba(255, 255, 255, 0.2)" : "rgba(103, 103, 103, 0.2)"};
    border: 1px solid
      ${(props: InputProps) =>
        props.inverted ? "#ffffff" : "var(--main-color)"};
    border-radius: 4px;
    padding: 10px;
    font-family: inherit;
    color: currentColor;
  }

  textarea {
    min-height: 180px;
  }

  .Dropdown-root {
    position: relative;
    z-index: 10000;
  }
  .Dropdown-root.is-open .Dropdown-control {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .Dropdown-menu {
    position: absolute;
    left: 0;
    width: 100%;
    top: 100%;
    background-color: ${(props: InputProps) =>
      props.inverted ? "#858585" : "#e1e1e1"};
    border: 1px solid
      ${(props: InputProps) =>
        props.inverted ? "#ffffff" : "var(--main-color)"};
    border-top: 0;
    border-radius: 0 0 4px 4px;
  }

  .Dropdown-option {
    padding: 10px;
  }
`;

const SPAN = styled("span")`
  font-size: 22px;
  line-height: 25px;
  margin-bottom: 10px;
`;
