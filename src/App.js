import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register/index";
import EnableSetPassword from "./EnableSetPassword/index";
import CorreoIncorrecto from "./CorreoIncorrecto/index";
import Login from "./Login/index";
import FaseGrupos from "./FaseGrupos/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<FaseGrupos />} />
        <Route path="/enableSetPassword" element={<EnableSetPassword />} />
        <Route path="/correoIncorrecto" element={<CorreoIncorrecto />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
