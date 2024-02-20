import { createBrowserRouter } from "react-router-dom";
import { FriendsPage, MainPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/friends",
    element: <FriendsPage />,
  },
]);
