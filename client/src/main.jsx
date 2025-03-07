import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")).render(
  <DndProvider backend={HTML5Backend}>
    <Router>
      <App />
    </Router>
  </DndProvider>
);
