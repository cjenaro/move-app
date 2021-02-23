import * as React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";
import Button from "../components/button";
import useClient from "../hooks/use-client";
import Wrapper from "../components/wrapper";

export default function Home(props: RouteComponentProps) {
  const client = useClient("123");
  return (
    <Wrapper>
      <HOME>
        <GREETING>Buen día, {client.name}</GREETING>
        <SUBSCRIPTION>suscripción</SUBSCRIPTION>
        <STATUS>ACTIVA</STATUS>
        <LINK to="plan">
          <Button type="button">Ver mi Plan</Button>
        </LINK>
      </HOME>
    </Wrapper>
  );
}

const LINK = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;

const HOME = styled("div")`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 32px;
  margin: 0 auto;
`;

const SUBSCRIPTION = styled("p")`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 0;
  margin-bottom: 10px;
`;

const STATUS = styled("p")`
  font-size: 50px;
  line-height: 57px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--main-color);
  margin-top: 0;
  margin-bottom: 40px;
`;

const GREETING = styled("p")`
  font-size: 30px;
  line-height: 34px;
  color: #000000;
  margin-top: 0;
  margin-bottom: 40px;
`;
