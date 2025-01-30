import React from "react"
import { usePortfolioScripts } from "./script"
import "./App.css"

function App() {
  usePortfolioScripts()

  return (
    <div className="App">
      <div className="scroll-blur"></div>
      <div className="whitespace-top"></div>

      <header className="container">
        <img src="/logo.jpg" alt="Anandha Krishnan's Logo" className="top-logo" />
        <div className="intro">
          Hey there! I'm{" "}
          <img
            src="profile.jpeg"
            alt="Profile"
            className="profile-image"
            onClick={() => window.open("resume.pdf", "_blank")}
          />{" "}
          <span>Anandha Krishnan</span>, a <span>Engineering student & Developer .</span>
          showcasing <span> skills and Projects </span> in IoT, software Development <span>and hardware design</span>.
        </div>
        <div className="buttons">
          <button id="resumeButton" className="button resume">
            Check Resume
          </button>
          <button id="worksButton" className="button works">
            View Works
          </button>
        </div>
        <nav className="footer-links">
          <a href="#micro-interaction">HTML</a>
          <span aria-hidden="true">&bull;</span>
          <a href="#ux-case-studies">JAVA</a>
          <span aria-hidden="true">&bull;</span>
          <a href="#ui-visuals">REACT JS</a>
        </nav>
      </header>

      <main>
        <section id="ui-visuals" className="ui-section">
          <div className="ui-container">
            <p className="ui-subtitle animate-on-scroll">My Playground</p>
            <h2 className="ui-title animate-on-scroll">PROJECTS</h2>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="projects-container">
            <div className="featured-project animate-on-scroll" id="project-iot">
              <div className="project-content">
                <h2>
                  Engineering
                  <br />
                  Final-Year
                  <br />
                  Projects
                </h2>
                <p>
                  IoT-Enhanced Wearable Vision Assistance System Using Raspberry Pi with Object Detection and
                  Multi-Sensory Feedback
                </p>
                <button className="view-project" data-project="iot">
                  In Progress
                </button>
              </div>
              <div className="project-image">
                <img src="/finalproject.jpeg" alt="Raspberry Pi Project Setup" />
              </div>
            </div>

            <div className="projects-grid">
              <div className="project-card animate-on-scroll" id="project-arduino">
                <img src="/arduino.jpeg" alt="Arduino Accident Alert System" />
                <h3>Accident Alert System Using Arduino Uno With Neo6m And Gps Module</h3>
                <button className="view-project" data-project="arduino">
                  View Project
                </button>
              </div>

              <div className="project-card animate-on-scroll" id="project-ml">
                <img src="/ml.jpeg" alt="Resume Parser ML" />
                <h3>Resume Parser Using Natural Language Processing In Machine Learning</h3>
                <button className="view-project" data-project="ml">
                  View Project
                </button>
              </div>

              <div className="project-card animate-on-scroll" id="project-cafe">
                <img src="/cafe.jpeg" alt="Cafe Management System" />
                <h3>Cafe Management System Using Java Script, Html And Css</h3>
                <button className="view-project" data-project="cafe">
                  View Project
                </button>
              </div>

              <div className="project-card animate-on-scroll" id="project-rfid">
                <img src="/rfid.jpeg" alt="Smart Door Lock" />
                <h3>Smart Door Lock With RFID Using Arduino Uno</h3>
                <button className="view-project" data-project="rfid">
                  View Project
                </button>
              </div>
            </div>
          </div>

          <div className="view-more-container animate-on-scroll">
            <button className="view-more-button">View More Projects</button>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="experience-container">
            <header className="experience-header">
              <p className="experience-subtitle animate-on-scroll">Projects & Software Designed</p>
              <h2 className="experience-title animate-on-scroll">My Experience So Far</h2>
            </header>

            <div className="experience-list">
              <div className="experience-item animate-on-scroll">
                <span className="experience-date">May 2022 - Jun 2022</span>
                <a href="https://example.com/gamocode" className="experience-link">
                  Internship On Embedded System with AI and IOT at NSIC-Tech
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Aug 2022 - Oct 2023</span>
                <a href="https://example.com/moneyrush" className="experience-link">
                  Internship at WHEELS INDIA LIMITED-TVS
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Aug 2023 - Sep 2023</span>
                <a href="https://example.com/trusted-prop" className="experience-link">
                  Tessolve Industry Training-Embedded IOT and Industrial Automation
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Aug 2024 </span>
                <a href="https://example.com/jobzshala" className="experience-link">
                  Semifinalist in Designathon'24 Ranked among the top 100
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date"> March 2024</span>
                <a href="https://example.com/chad-trader" className="experience-link">
                  Java programming in - ORACLE
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Apr 2024 - May 2024</span>
                <a href="https://example.com/housewives" className="experience-link">
                  Accident Alert System using Arduino Uno
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Feb 2024 - Mar 2024</span>
                <a href="https://example.com/schoolnet" className="experience-link">
                  Resume Parser using Natural Language Processing
                </a>
              </div>

              <div className="experience-item animate-on-scroll">
                <span className="experience-date">Jan 2025 - In progress</span>
                <a href="https://example.com/zeppelearn" className="experience-link">
                  IoT-Enhanced Wearable Vision Assistance System Using Raspberry Pi with Object Detection and
                  Multi-Sensory Feedback
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.jpg" alt="Anandha Krishnan's Logo" />
        </div>
        <div className="navbar-links">
          <a href="#projects">Works</a>
          <span aria-hidden="true">&bull;</span>
          <a href="https://github.com/Anandhakrishnans2003">Git</a>
          <span aria-hidden="true">&bull;</span>
          <a href="#experience">Experience</a>
        </div>
        <a href="mailto:anandhakrishnans2003@gmail.com" id="emailButton" className="email">
          <img src="/mail.png" alt="" /> Email
        </a>
      </nav>

      <div className="End-tag">
        <p>Under Construction</p>
        <p className="loading">Loading...</p>
      </div>

      <div className="whitespace-bottom"></div>
    </div>
  )
}

export default App

