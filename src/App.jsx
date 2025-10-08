import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaStar,
  FaTools,
  FaCogs,
  FaCode,
  FaLayerGroup,
  FaEnvelope,
} from "react-icons/fa";
import laptopImg from "./assets/laptop.jpg";
import "./App.css";
import { animateHero, animateSections } from "./animation";

const App = () => {
  const sectionsRef = useRef([]);
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("muwaisk2@gmail.com");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch {
      alert("Failed to copy email. Please try manually.");
    }
  };

  useEffect(() => {
    animateHero(heroRef, titleRef);
    animateSections(sectionsRef);
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <header
        className="header"
        ref={heroRef}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${laptopImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="floating-banner clickable"
          onClick={scrollToContact}
          style={{ cursor: "pointer" }}
        >
          <p>Looking for Clients 🚀 — Click to Contact Me</p>
        </div>

        <h1 className="title" ref={titleRef}>
          <FaRocket /> Muhammad Uwais Karim
        </h1>
        <p className="subtitle">
          I’m a 12-year-old developer and designer from South Africa, building modern,
          high-performance web apps and UI/UX experiences for brands and individuals.
        </p>

        <div className="mirror"></div>
      </header>

      {/* About Section */}
      <section ref={addToRefs} className="section about">
        <div className="content">
          <h2><FaStar className="icon" /> About Me</h2>
          <p>I craft fast, modern, and responsive web experiences with clean, elegant code.</p>
          <p>My focus is turning ideas into sleek digital solutions that look amazing and perform flawlessly.</p>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section ref={addToRefs} className="section why-partner">
        <div className="content">
          <h2><FaLayerGroup className="icon" /> Why Work With Me</h2>
          <ul>
            <li>⚡ <strong>Fast & Modern:</strong> React & clean code.</li>
            <li>🎨 <strong>Design-Focused:</strong> Intuitive, polished interfaces.</li>
            <li>💻 <strong>Full-Stack Capable:</strong> Node.js, Firebase, REST APIs.</li>
            <li>🚀 <strong>Results-Oriented:</strong> Real experience, real quality.</li>
            <li>    <strong>Customers and Recognition:</strong>I try my best on all projects to get you more customers and more business regonition</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToRefs} className="section services">
        <div className="content">
          <h2><FaTools className="icon" /> Services & Pricing</h2>
          <div className="service-card">
            <h3>🖥️ Custom Websites</h3>
            <p>High-performance websites for portfolios, startups, businesses and more.</p>
            <p className="price">Starting at $600 (Price may change based on Client request)</p>
          </div>
          <div className="service-card">
            <h3>⚙️ React Web Apps</h3>
            <p>Interactive apps with real-time data, authentication, and animations.</p>
            <p className="price">Starting at $750 (Price may change based on Client request)</p>
          </div>
          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>Interfaces optimized for conversion and user experience.</p>
            <p className="price">Starting at $140 (Price may change based on Client request)</p>
          </div>
          <div className="service-card">
            <h3>🔧 Fixes & Upgrades</h3>
            <p>Speed improvements, bug fixes, and modern design enhancements.</p>
            <p className="price">Starting at $80 (Price may change based on Client request)</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={addToRefs} className="section process">
        <div className="content">
          <h2><FaCogs className="icon" /> My 3-Step Process</h2>
          <ol>
            <li><strong>1. Discovery:</strong> Understanding your goals.</li>
            <li><strong>2. Design & Feedback:</strong> Aligning visuals and structure.</li>
            <li><strong>3. Development & Launch:</strong> Build, test, and deploy smoothly.</li>
          </ol>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={addToRefs} className="section tech">
        <div className="content">
          <h2><FaCode className="icon" /> Tech Stack</h2>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Frontend</td><td>React, JavaScript (ES6+), Tailwind CSS</td></tr>
              <tr><td>Animation</td><td>GSAP</td></tr>
              <tr><td>Backend & Database</td><td>Node.js, Firebase</td></tr>
              <tr><td>Tools & Deployment</td><td>GitHub, Vercel</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section contact">
        <div className="content">
          <h2><FaEnvelope className="icon" /> Contact Me</h2>
          <div className="contact-info">
            <span>muwaisk2@gmail.com</span>
            <button className="btn copy-btn" onClick={copyEmail}>
              Copy Email
            </button>
          </div>
          {showToast && <div className="toast">Email copied!</div>}
        </div>
      </section>
    </div>
  );
};

export default App;
