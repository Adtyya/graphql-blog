import React from "react";
import { NavigationBar } from "./navbar/NavigationBar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="w-full max-w-7xl mx-auto pt-20">{children}</div>
    </>
  );
};
