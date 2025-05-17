import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
