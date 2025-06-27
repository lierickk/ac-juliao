import './About.css';

function About() {
  return (
    <section className="sobre-section">
      <div className="sobre-container">
        <h1>Sobre Nós</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>Olá! Somos <strong>Arthur</strong> e <strong>Erick</strong>, desenvolvedores Full Stack apaixonados por tecnologia, inovação e soluções criativas para a web.</p>
            <p>Trabalhamos com tecnologias modernas como <strong>React</strong>, <strong>Node.js</strong> e <strong>JavaScript</strong>, e temos experiência em projetos que envolvem desde o frontend até o backend.</p>
            <ul>
              <li>JavaScript • React • Node.js</li>
              <li>HTML • CSS • SASS</li>
              <li>Git • Figma • SQL • MongoDB</li>
            </ul>
            <a href="https://github.com/lierickk" target="_blank" rel="noreferrer">
              <strong>Confira nosso GitHub 🚀</strong>
            </a>
          </div>
          <div className="about-images">
            <img src="/images/image.jpg" alt="Foto do Erick" className="about-photo" />
            <img src="/images/WhatsApp.jpeg" alt="Foto do Arthur" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
