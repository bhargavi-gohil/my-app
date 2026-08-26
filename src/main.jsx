import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>React Jobs</h1>
      <p>Entry point added to fix Vite build error.</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
