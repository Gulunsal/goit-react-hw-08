import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
}
