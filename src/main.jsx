import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContext, AppProvider } from "./context/app-context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
