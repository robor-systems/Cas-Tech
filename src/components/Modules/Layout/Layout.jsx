import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
