import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
