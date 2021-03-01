import * as React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { styled } from "@filbert-js/core";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import useAuth from "../hooks/use-auth";

export default function Home(props: RouteComponentProps) {
  const { user } = useAuth();
  const active = new Date(user?.valid || "").getTime() > new Date().getTime();

  return (
    <Wrapper>
      <HOME>
        {!user ? null : (
          <>
            <GREETING>Buen día, {user.name}</GREETING>
            <SUBSCRIPTION>suscripción</SUBSCRIPTION>
            <STATUS active={active}>{active ? "" : "In"}activa</STATUS>
            <LINK to="plan">
              <Button type="button">Ver mi Plan</Button>
            </LINK>
          </>
        )}
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

const STATUS = styled("p")<{ active: boolean }>`
  font-size: 50px;
  line-height: 57px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${(props: { active: boolean }) =>
    props.active ? "var(--main-color)" : "var(--error)"};
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
