import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);


//reportWebVitals();
