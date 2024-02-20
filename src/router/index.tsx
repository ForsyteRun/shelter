import App from "@/App";
import { MainPage, FriendsPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      { path: "/friends", element: <FriendsPage /> },
    ],
  },
]);
