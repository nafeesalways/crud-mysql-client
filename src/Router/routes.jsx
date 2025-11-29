import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Books from "../pages/Books";
import Update from "../pages/Update";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add",
        Component: Add,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/update/:id",
        Component: Update,
      },
    ],
  },
]);

export default router;