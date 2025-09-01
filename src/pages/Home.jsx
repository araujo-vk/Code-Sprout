import React from "react";
import "../styles/Home.css";
import programmerImage from "../assets/programmer.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <img src={programmerImage} alt="Pessoa programando" className="home-image" />
      <div className="home-content">
        <h1>Bem-vindo ao CodeSprout🌱</h1>
        <p>
          O CodeSprout é seu guia inicial no mundo da tecnologia. Aqui você aprende,
          cresce e descobre as bases da programação de forma divertida, acessível e intuitiva!
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Cursos Interativos</h3>
          <p>Aprenda programação com aulas práticas e materiais atualizados.</p>
        </div>
        <div className="feature-card">
          <h3>Comunidade</h3>
          <p>Conecte-se com outros iniciantes, tire dúvidas e compartilhe ideias.</p>
        </div>
        <div className="feature-card">
          <h3>Conteúdo em Crescimento</h3>
          <p>Novo conteúdo toda semana para manter seu aprendizado ativo.</p>
        </div>
      </div>

      <div className="testimonials">
        <h2>O que dizem nossos usuários</h2>
        <p>“O CodeSprout me ajudou a entender o básico de programação de forma clara e divertida!” — João M.</p>
      </div>

      <div className="faq">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-item">
          <h4>Como começo?</h4>
          <p>Você pode começar acessando a aba 'Cursos' no menu superior. Lá você encontrará módulos para iniciantes.</p>
        </div>
        <div className="faq-item">
          <h4>É gratuito?</h4>
          <p>Sim! Todo o conteúdo do CodeSprout é 100% gratuito para ajudar quem está começando.</p>
        </div>
        <div className="faq-item">
          <h4>Preciso saber programar antes?</h4>
          <p>Não! Nosso conteúdo foi feito para quem está começando do zero.</p>
        </div>
        <div className="faq-item">
          <h4>Posso sugerir novos conteúdos?</h4>
          <p>Claro! Entre em contato pela seção 'Contato' ou mande sugestões diretamente pela nossa comunidade.</p>
        </div>
      </div>

      <div className="cta">
        <h2>Pronto para começar?</h2>
        <button className="cta-button">Acesse os cursos</button>
      </div>

    </div>
  );
}
