import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// /import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
