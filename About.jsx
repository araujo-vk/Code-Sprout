// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Sobre o CodeSprout</h1>

      <motion.p 
        className="about-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        O CodeSprout nasceu com o propósito de ajudar iniciantes a entrarem no mundo da programação de forma simples,
        prática e acolhedora. Nosso objetivo é criar um ambiente onde qualquer pessoa possa aprender tecnologia sem medo.
      </motion.p>

      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3>🌱 Nossa missão</h3>
        <p>
          Tornar o aprendizado de programação acessível para todos, com materiais claros, recursos interativos
          e uma comunidade de apoio.
        </p>
      </motion.div>

      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3>👨‍💻 Para quem é?</h3>
        <p>
          Para quem está dando os primeiros passos na programação, seja jovem, adulto, estudante ou curioso.
          Não importa sua idade ou experiência prévia: o CodeSprout é para você!
        </p>
      </motion.div>

      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h3>🚀 Nosso compromisso</h3>
        <p>
          Manter o conteúdo atualizado, criar novas funcionalidades e ouvir a comunidade para evoluir
          junto com você.
        </p>
      </motion.div>
    </motion.div>
  );
}
