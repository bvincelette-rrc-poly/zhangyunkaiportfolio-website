import React from 'react';
import './App.css';

const storeImage = '/images/WechatIMG705.jpg'; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Brian's Portfolio</h1>
      </header>

      <main>
        {/* Basic Information */}
        <section className="basic-info">
          <h2>Basic Information</h2>
          <p>
            My name is Brian, a dedicated student at Red River College specializing in Web Development. 
            I am passionate about creating innovative, user-friendly web applications and have a strong foundation 
            in modern web technologies. This portfolio highlights my technical expertise, creative problem-solving skills, 
            and commitment to delivering high-quality solutions.
          </p>
        </section>

        {/* Projects */}
        <section className="work">
          <h2>Projects</h2>
          <div className="work-item">
            <h3>Title: E-commerce Product Listing Page</h3>
            <p>Description: A product listing page for an e-commerce platform with the following features:</p>
            <ul>
              <li>Product display</li>
              <li>Category filtering</li>
              <li>Price sorting</li>
              <li>Add to cart</li>
            </ul>
            <img src={storeImage} alt="Sample interface" className="project-image" />
            <p>Tech Stack:</p>
            <ul>
              <li><strong>Frontend:</strong> HTML/CSS, JavaScript (with Rails ERB templates)</li>
              <li><strong>Backend:</strong> Ruby on Rails</li>
              <li><strong>Database:</strong> SQLite/PostgreSQL (for storing product data)</li>
            </ul>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className="project-link">View Project</a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-list">
          <h2>Tech Stack</h2>
          <p><strong>Description:</strong> I specialize in frontend development and containerized deployment.</p>
          <p><strong>Languages/Frameworks:</strong> JavaScript, React, HTML, CSS</p>
          <p><strong>Tools:</strong> VSCode, Docker, Git</p>
        </section>

        {/* Resources */}
        <section className="resources">
          <h2>Resources</h2>
          <div className="resource-item">
            <h3>Title: Getting Started with Docker</h3>
            <img src="https://via.placeholder.com/50" alt="Docker icon" />
            <p>Introduction: Official Docker tutorial for beginners.</p>
            <a href="https://docs.docker.com/get-started/" target="_blank" rel="noreferrer" className="resource-link">Link</a>
          </div>
        </section>

        {/* Developer Setup */}
        <section className="dev-setup">
          <h2>Developer Setup</h2>
          <p><strong>VSCode Settings:</strong> Dark+ theme, Auto Save enabled.</p>
          <p><strong>Terminal Settings:</strong> Mac OS Terminal, Solarized Dark theme.</p>
          <p><strong>Preferred Editor Font:</strong> JetBrains Mono.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Brian</p>
      </footer>
    </div>
  );
}

export default App;