import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
/* Add Font from MaterialUI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* Add Font from MaterialUI End*/

import Login from "./components/Login/SignIn/index"
import Root from "./routes/root"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signIn",
    element: <Login />
  }
]);

root.render(
  <React.StrictMode>
    {/* <App name = "Merhaba Dünya"/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

