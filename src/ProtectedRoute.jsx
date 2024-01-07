import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  const isAuthenticated = token !== null; 
  return isAuthenticated ? children : <Navigate to="/redirected" />;
};

export default ProtectedRoute;
