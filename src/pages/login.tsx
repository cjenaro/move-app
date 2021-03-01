import * as React from "react";
import { styled } from "@filbert-js/core";

import Button from "../components/button";
import Input from "../components/input";
import Wrapper from "../components/wrapper";
import useLogin from "../hooks/use-login";
import { parseUser } from "../hooks/use-auth";
import Spinner from "../components/spinner";

interface LogInProps {
  setLoggedIn: (loggedIn: any) => void;
  loading?: boolean;
}

export default function LogIn(props: LogInProps) {
  const { mutateAsync, error, isLoading } = useLogin();

  async function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const dni = form.get("dni") as string;

    const blob = await mutateAsync(Number(dni));
    const json = await blob.json();

    if (blob.ok && json?.data[0]) {
      props.setLoggedIn(parseUser(json.data[0]));
    }
  }

  return (
    <Wrapper>
      <FORM onSubmit={handleLogin}>
        {isLoading || props.loading ? (
          <SPINNER />
        ) : (
          <>
            <H1>Iniciar Sesion</H1>
            <Input label="DNI" htmlFor="dni">
              <input placeholder="123123123" type="number" name="dni" />
            </Input>
            <Button type="submit">Enviar</Button>
            {error ? <Error>{JSON.stringify(error)}</Error> : null}
          </>
        )}
      </FORM>
    </Wrapper>
  );
}

const SPINNER = styled(Spinner)`
  margin: 40px auto;
  display: block;
`;

const Error = styled("p")`
  margin: 1em 0;
  font-size: 1rem;
  color: var(--error);
`;

const FORM = styled("form")`
  display: grid;
  justify-content: center;
  background-color: #ffffff;
  padding: 25px;
  row-gap: 30px;
  border-radius: 4px;
  width: max-content;
  margin: 0 auto;
  width: 100%;
`;

const H1 = styled("h1")`
  font-size: 34px;
  line-height: 34px;
  text-align: center;
  margin: 0;
`;
