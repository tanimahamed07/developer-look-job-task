import React from "react";
import HomePage from "../page/HomePage";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
