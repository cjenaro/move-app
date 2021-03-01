import * as React from "react";

import Layout from "./components/layout";
import Pages from "./pages/router";
import LogInPage from "./pages/login";
import useAuth from "./hooks/use-auth";

function App() {
  const { user, setUser, loading } = useAuth();

  return (
    <Layout>
      {user ? <Pages /> : <LogInPage setLoggedIn={setUser} loading={loading} />}
    </Layout>
  );
}

export default App;
