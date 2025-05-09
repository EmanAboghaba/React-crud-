import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function SharedLayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
