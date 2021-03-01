import * as React from "react";
import { styled } from "@filbert-js/core";
import logo from "../assets/logo.png";
import { Link } from "@reach/router";

interface Props {
  logOut: () => void;
}

export default function Header({ logOut }: Props) {
  return (
    <HEADER>
      <Link to="/">
        <img src={logo} alt="Move Logo." />
      </Link>
      <BUTTON onClick={logOut}>Cerrar Sesión</BUTTON>
    </HEADER>
  );
}

const BUTTON = styled("button")`
  color: #ffffff;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

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
