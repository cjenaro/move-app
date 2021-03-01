import * as React from "react";
import { Global } from "@filbert-js/core";

import Header from "./header";

type LayoutProps = {
  children: JSX.Element;
  logOut: () => void;
};

export default function Layout({ children, logOut }: LayoutProps) {
  return (
    <>
      <Global
        styles={`
          :root {
            --main-color: #676767;
            --secondary-color: green;
            --header-height: 150px;
            --error: #cc2233;
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
          
          #root {
            display: grid;
            grid-template-rows: auto 1fr;
            min-height: 100vh;
          }

          main {
            padding: 0 17.5px;
            background-color: var(--main-color);
          }
        `}
      />
      <Header logOut={logOut} />
      <main>{children}</main>
    </>
  );
}
