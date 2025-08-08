import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./components/postList.jsx";
import CreatePost from "./components/createPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
