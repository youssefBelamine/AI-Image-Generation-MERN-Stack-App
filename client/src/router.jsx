import { createBrowserRouter } from "react-router-dom";
import { CreatePost, Home } from "./Pages";
import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
// import { CreatePost, Home } from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
    errorElement: <ErrorPage/>,
      },
    ],
  },

  {
    path: "*",
    element: <div>Nothing to show</div>,
  },
]);
