import * as React from "react";
import { styled } from "@filbert-js/core";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <HEADER>
      <img src={logo} alt="Move Logo." />
    </HEADER>
  );
}

const HEADER = styled("header")`
  min-height: var(--header-height);
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 227px;
    height: auto;
  }
`;
