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
          <div className="logo">AI AGENTS</div>
          <button className="menu-button" onClick={toggleMenu} aria-label="Menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#recursos" onClick={() => setIsMenuOpen(false)}>Recursos</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Inteligência Artificial<br />Reinventada</h1>
            <p>Descubra uma nova era de possibilidades com nossos agentes de IA, projetados para transformar a maneira como interagimos com a tecnologia.</p>
            <button className="cta-button">Explorar</button>
          </div>
        </section>

        <section id="sobre" className="about">
          <h2>Sobre</h2>
          <div className="about-content">
            <p>Nossos agentes de IA representam a vanguarda da tecnologia, combinando sofisticação e eficiência para criar soluções inteligentes que transcendem as expectativas convencionais.</p>
          </div>
        </section>

        <section id="recursos" className="features">
          <h2>Recursos</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automação Elegante</h3>
              <p>Transforme processos complexos em experiências fluidas e intuitivas.</p>
            </div>
            <div className="feature-card">
              <h3>Evolução Constante</h3>
              <p>Aprenda e adapte-se continuamente para oferecer resultados excepcionais.</p>
            </div>
            <div className="feature-card">
              <h3>Decisões Refinadas</h3>
              <p>Análise precisa e tomada de decisão baseada em dados avançados.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <h2>Contato</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 AI AGENTS</p>
      </footer>
    </div>
  )
}

export default App
