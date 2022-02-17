import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import React from "react";

export function ProtectedRoute(props) {
  const { isAuth } = useAuthContext();
  const location = useLocation();
  const { children } = props;

  // if the current visitor not login send him to login  page

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //  otherwise allow him to see posts

  return children;
}
