import * as React from "react";
import { Router } from "@reach/router";

// pages
import Home from "./home";
import Plan from "./plan";
import Exercise from "./exercise";
import useAuth from "../hooks/use-auth";

export default function Pages() {
  const { user } = useAuth();
  const active = new Date(user?.valid || "").getTime() > new Date().getTime();

  return (
    <Router>
      <Home path="/" />
      {active ? (
        <>
          <Plan path="plan" />
          <Exercise path="exercise/:exerciseId" />
        </>
      ) : null}
    </Router>
  );
}
