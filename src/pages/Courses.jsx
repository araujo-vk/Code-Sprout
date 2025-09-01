// src/pages/Courses.jsx
import React from "react";
import "../styles/Courses.css";

export default function Courses() {
  return (
    <div className="courses-container">
      <h1>Nossos Cursos</h1>
      <p className="intro">
        Aqui estão alguns cursos ideais para quem está começando na programação.
      </p>

      <div className="courses-grid">
        <div className="course-card">
          <h3>Lógica de Programação</h3>
          <p>Aprenda os fundamentos do raciocínio lógico aplicados à programação.</p>
          <button>Acessar</button>
        </div>
        <div className="course-card">
          <h3>HTML e CSS</h3>
          <p>Comece a construir páginas web com HTML semântico e CSS estilizado.</p>
          <button>Acessar</button>
        </div>
        <div className="course-card">
          <h3>Introdução ao JavaScript</h3>
          <p>Conheça a linguagem que dá vida às páginas web. Interatividade na prática!</p>
          <button>Acessar</button>
        </div>
      </div>
    </div>
  );
}
