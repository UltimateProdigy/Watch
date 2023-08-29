import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
