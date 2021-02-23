import * as React from "react";
import { Global } from "@filbert-js/core";

import Header from "./header";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Global
        styles={`
          :root {
            --main-color: #676767;
            --secondary-color: green;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .App {
            display: grid;
            grid-template-rows: auto 1fr;
            min-height: 100vh;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </>
  );
}
