import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Projects from "./Projects";

export default function Routes(){
    const router = createBrowserRouter([
        {
        path: '/',
        element: <Projects/>
    }
    ]);

    return <RouterProvider router={router}></RouterProvider>
}