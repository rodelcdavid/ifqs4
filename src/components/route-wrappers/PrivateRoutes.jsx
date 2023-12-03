import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);
  return isUserAuthenticated ? <Outlet /> : <Navigate to="/assessment" />;
}

export default PrivateRoutes;
