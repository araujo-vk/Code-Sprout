// src/pages/Contato.jsx
import React from "react";
import "../styles/Contato.css";

export default function Contato() {
  return (
    <div className="contato-container">
      <h1>Fale Conosco</h1>
      <p>Tem dúvidas, sugestões ou quer dar um oi? Preencha o formulário abaixo e entraremos em contato!</p>
      
      <form className="contato-form">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required placeholder="Seu nome" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required placeholder="seu@email.com" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Escreva sua mensagem aqui..." />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
