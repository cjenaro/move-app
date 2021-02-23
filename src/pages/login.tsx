import * as React from "react";
import { styled } from "@filbert-js/core";

import Button from "../components/button";
import Input from "../components/input";
import Wrapper from "../components/wrapper";

interface LogInProps {
  setLoggedIn: (loggedIn: boolean) => void;
}

export default function LogIn(props: LogInProps) {
  function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();

    props.setLoggedIn(true);
  }

  return (
    <Wrapper>
      <FORM onSubmit={handleLogin}>
        <H1>Iniciar Sesion</H1>
        <Input label="DNI" htmlFor="dni">
          <input placeholder="123123123" type="text" name="dni" />
        </Input>
        <Button type="submit">Enviar</Button>
      </FORM>
    </Wrapper>
  );
}

const FORM = styled("form")`
  display: grid;
  justify-content: center;
  background-color: #ffffff;
  padding: 25px;
  row-gap: 30px;
  border-radius: 4px;
  width: max-content;
  margin: 0 auto;
`;

const H1 = styled("h1")`
  font-size: 34px;
  line-height: 34px;
  text-align: center;
  margin: 0;
`;
