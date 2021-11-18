import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp"

import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <NavbarComp />
      <Footer />
    </div>
  );
}
