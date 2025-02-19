import React from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="nav-container">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </div>
  );
}
