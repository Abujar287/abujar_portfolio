import React from 'react'
function App() {
  return (
    <div className="portfolio">
      <main>
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-label">DATA & BUSINESS INSIGHTS</p>
              <h1>
                ABUJAR <strong>AL-GIFARI</strong>
              </h1>
              <div className="hero-title">
                <div className="title-line">
                  <span className="word word-1">DATA</span>
                  <span className="word word-2">ANALYST</span>
                  <span className="word separator word-3">|</span>
                  <span className="word word-4">BUSINESS</span>
                  <span className="word word-5">INTELLIGENCE</span>
                </div>
                <div className="title-line second-line">
                  <span className="word word-6">EXCEL,</span>
                  <span className="word word-7">SQL</span>
                  <span className="word word-8">&amp;</span>
                  <span className="word word-9">PYTHON</span>
                  <span className="word separator word-10">|</span>
                  <span className="word word-11">CRM</span>
                  <span className="word word-12">&amp;</span>
                  <span className="word word-13">CLM</span>
                </div>
              </div>
              <p className="hero-description">
                Turning complex data into actionable insights, intelligent dashboards, automated reporting solutions and data-driven business decisions.
              </p>
              <div className="hero-buttons">
                <a href="mailto:abujar287.algifari@gmail.com" className="primary-button">
                  Contact Me <span>↗</span>
                </a>
                <a href="https://www.linkedin.com/in/abujar-al-gifari/" target="_blank" rel="noreferrer" className="secondary-button">
                  LinkedIn
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>
                <div>
                  <strong>8+</strong>
                  <span>Teams Analyzed</span>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              <div className="photo-frame">
                <div className="photo-corner top-left"></div>
                <div className="photo-corner top-right"></div>
                <div className="photo-corner bottom-left"></div>
                <div className="photo-corner bottom-right"></div>
                <img src="/profile_picture.jpg" alt="Abujar Al-Gifari" />
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>
      </main>
    </div>
  )
}
export default App
