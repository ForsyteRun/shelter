import { MainPage, FriendsPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

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
