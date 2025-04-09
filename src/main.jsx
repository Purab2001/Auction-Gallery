import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins/400.css"; // Normal weight
import "@fontsource/poppins/500.css"; // Medium weight
import "@fontsource/poppins/600.css"; // Semi-bold weight
import "@fontsource/poppins/700.css"; // Bold weight
import "@fontsource/sora"; // Defaults to weight 400
import "@fontsource/sora/400.css"; // Specify weight

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
