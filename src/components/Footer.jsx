import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>CodeSprout</h3>
          <p>Plataforma feita para ajudar iniciantes a crescerem no mundo da tecnologia.</p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/cursos">Cursos</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CodeSprout. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
