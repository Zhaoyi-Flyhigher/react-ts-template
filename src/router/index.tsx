import React from "react";
import { createBrowserRouter } from "react-router-dom"; 

import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            }, {
                path: "/about",
                element: <About />
            }
        ],
    }
]);
export default router;