import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Kalau belum login, redirect ke login
    return <Navigate to="/login" replace />;
  }

  // Kalau sudah login, render komponen children-nya
  return children;
};

export default PrivateRoute;
