import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function RestrictedRoute({ children, redirectTo = '/' }) {
  const {isLoggedIn, isRefreshing} = useSelector((state) => state.auth);

  if (isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}
