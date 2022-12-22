import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* Add Font from MaterialUI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* Add Font from MaterialUI End*/
import Login from "./components/Login/SignIn/index"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App name = "Merhaba Dünya"/> */}
    <Login />
  </React.StrictMode>
);

