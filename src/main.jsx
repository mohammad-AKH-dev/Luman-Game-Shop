import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
      <App />
  </HashRouter>
);
