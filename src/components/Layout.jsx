import React from "react";
import AppBar from "./Navbar/AppBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
