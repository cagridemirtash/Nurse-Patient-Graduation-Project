import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
/* Add Font from MaterialUI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* Add Font from MaterialUI End*/
import Root from "./routes/root"
import Login from "./components/Login/SignIn/index"
import SignUp from "./components/Login/SignUp/index"
import ErrorPage from "./components/Error/ErrorPage";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signIn",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <ErrorPage />
  }
]);

root.render(
  <React.StrictMode>
    {/* <App name = "Merhaba Dünya"/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

