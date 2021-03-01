import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/layout";
import Pages from "./pages/router";
import LogInPage from "./pages/login";
import useAuth from "./hooks/use-auth";

const queryClient = new QueryClient();

function App() {
  const { user, setUser } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{user ? <Pages /> : <LogInPage setLoggedIn={setUser} />}</Layout>
    </QueryClientProvider>
  );
}

export default App;
