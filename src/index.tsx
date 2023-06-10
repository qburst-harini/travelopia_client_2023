import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouting } from "./AppRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>
);
