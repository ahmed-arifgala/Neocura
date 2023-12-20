import Router from "./router/Router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
