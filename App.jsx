import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Cursos from "./pages/Courses";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import AI from "./pages/AI";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ia" element={<AI />} />
      </Routes>
      <Footer />
    </>
  );
}
