import * as React from "react";
import { Router } from "@reach/router";

// pages
import Home from "./home";
import Plan from "./plan";
import Exercise from "./exercise";

export default function Pages() {
  return (
    <Router>
      <Home path="/" />
      <Plan path="plan" />
      <Exercise path="exercise/:exerciseId" />
    </Router>
  );
}
