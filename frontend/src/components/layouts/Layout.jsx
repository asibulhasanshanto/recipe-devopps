import React from "react";
import Navbar from "../navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar />
      <div className="py-10 ">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
