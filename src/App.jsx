import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">AI Agents</div>
          <button className="menu-button" onClick={toggleMenu} aria-label="Menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#recursos" onClick={() => setIsMenuOpen(false)}>Recursos</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>O Futuro da Inteligência Artificial</h1>
            <p>Descubra como os agentes de IA estão transformando a maneira como interagimos com a tecnologia</p>
            <button className="cta-button">Saiba Mais</button>
          </div>
        </section>

        <section id="sobre" className="about">
          <h2>Sobre Agentes de IA</h2>
          <div className="about-content">
            <p>Os agentes de IA são sistemas inteligentes capazes de perceber seu ambiente, tomar decisões e executar ações para atingir objetivos específicos.</p>
          </div>
        </section>

        <section id="recursos" className="features">
          <h2>Recursos Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automação Inteligente</h3>
              <p>Automatize tarefas complexas com agentes de IA</p>
            </div>
            <div className="feature-card">
              <h3>Aprendizado Contínuo</h3>
              <p>Melhoria constante através do aprendizado de máquina</p>
            </div>
            <div className="feature-card">
              <h3>Tomada de Decisão</h3>
              <p>Decisões baseadas em dados e análise avançada</p>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <h2>Entre em Contato</h2>
          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 AI Agents. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
