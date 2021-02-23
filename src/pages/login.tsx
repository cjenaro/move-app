import * as React from "react";
import { styled } from "@filbert-js/core";

import Button from "../components/button";
import Input from "../components/input";

interface LogInProps {
  setLoggedIn: (loggedIn: boolean) => void;
}

export default function LogIn(props: LogInProps) {
  function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <FORM onSubmit={handleLogin}>
      <H1>Iniciar Sesion</H1>
      <Input label="DNI" htmlFor="dni">
        <input placeholder="123123123" type="number" name="dni" />
      </Input>
      <Button type="submit">Enviar</Button>
    </FORM>
  );
}

const FORM = styled("form")`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  padding: 0 20px;

  > div {
    max-width: 435px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

const H1 = styled("h1")`
  font-size: 34px;
  line-height: 34px;
  text-align: center;
  margin: 0;
`;
