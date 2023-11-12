import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
// import App from './App.tsx';
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);