import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/layout";
import Pages from "./pages/router";
import LogInPage from "./pages/login";

const queryClient = new QueryClient();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {loggedIn ? <Pages /> : <LogInPage setLoggedIn={setLoggedIn} />}
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
