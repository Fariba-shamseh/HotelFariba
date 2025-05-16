import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal"; // وارد کردن Modal
import "./index.css";
import App from "./App.jsx";
Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
