import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUserCircle,
  FaBook,
  FaRobot,
} from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <span className="site-name">CodeSprout 🌱</span>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          <FaHome /> Home
        </Link>
        <Link to="/sobre" className="nav-link">
          <FaInfoCircle /> Sobre
        </Link>
        <Link to="/cursos" className="nav-link">
          <FaBook /> Cursos
        </Link>
        <Link to="/ia" className="nav-link">
          <FaRobot /> IA
        </Link>
        <Link to="/contato" className="nav-link">
          <FaEnvelope /> Contato
        </Link>
          <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>
        <div className="profile-icon">
          <FaUserCircle />
          <div className="profile-dropdown">
            <button>Ver Perfil</button>
            <button>Trocar Conta</button>
            <button>Sair</button>
          </div>
        </div>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}
