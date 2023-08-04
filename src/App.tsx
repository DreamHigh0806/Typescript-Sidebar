import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
