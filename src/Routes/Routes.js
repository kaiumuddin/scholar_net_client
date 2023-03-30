import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home/Home";
import Videos from "../Components/Videos/Videos/Videos";
import Courses from "../Components/Courses/Courses/Courses";
import Books from "../Components/Books/Books/Books";
import Blogs from "../Components/Blogs/Blogs/Blogs";
import Groups from "../Components/Groups/Groups/Groups";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/videos",
            element: <Videos></Videos>
        },
        {
            path: "/courses",
            element: <Courses></Courses>
        },
        {
            path: "/books",
            element: <Books></Books>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/groups",
            element: <Groups></Groups>
        },
      ]
    },
    {
      path: "*",
      element: <Error></Error>
    },
  ]);

export default router;