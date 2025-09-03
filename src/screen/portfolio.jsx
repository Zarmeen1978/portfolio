import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

import './styles.css'
const projects = [
  {
    title: "Criclay Dashboard",
    desc: "A realtime dashboard for cricket analytics built with Next.js, GraphQL, and Redux.",
    tech: ["Next.js", "GraphQL", "Redux"],
    url: "#",
  },
  {
    title: "Book-Store MERN",
    desc: "Full-stack MERN app with product management, authentication, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "#",
  },
  {
    title: "Mobile Learning App (React Native)",
    desc: "An interactive educational mobile app with Urdu support and gamification.",
    tech: ["React Native", "Firebase"],
    url: "#",
  },
  {
    title: "Catered Club",
    desc: "Contributed to a large-scale restaurant web app as a React.js developer, focusing on food ordering, cart functionality, and responsive UI improvements.",
    tech: ["React.js", "Next.js", "Axios", "React Redux", "JavaScript", "HTML5", "CSS3"],
    url: "#",
  },
  {
    title: "Lasso – Marketing Automation Dashboard",
    desc: "Developed UI components and integrated Klaviyo API for a marketing automation platform to manage email campaigns and customer engagement.",
    tech: ["React.js", "JavaScript", "Axios", "Klaviyo API", "Redux", "HTML5", "CSS3"],
    url: "#",
  },
  {
    title: "Criclay Application | Asia",
    desc: "Built and maintained the organizer dashboard and mobile app for a sports management platform with live scoring, broadcasting, and match management.",
    tech: ["Next.js", "React.js", "React Native", "JavaScript", "GraphQL", "React Redux", "Ruby on Rails", "HTML5", "CSS3"],
    url: "#",
  },
  {
    title: "Restaurant Website",
    desc: "Responsive landing page for restaurants with animations, smooth navigation, and cross-device compatibility.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    url: "#",
  },
];

const skills = [
    "HTML",
    "CSS",
  "React.js",
  "React Native",
  "Next.js",
  "JavaScript (ES6+)",
  "CSS3 / SCSS",
  "Node.js ",
  "Firebase",
  "Material UI",
  "Tailwind CSS",
  "Git & GitHub",
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* HEADER */}
      <header className="portfolio-header">
        <div className="header-left">
          <div className="logo">ZQ</div>
          <div>
            <h1 className="name">Zarmeen Qureshi</h1>
            <p className="role">Frontend Developer • React / React Native</p>
          </div>
        </div>

        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-right">
          <a href="#contact" className="hire-btn">Hire Me</a>
          <div className="social-icons">
            <a aria-label="Github" href="#"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="#"><Linkedin size={18} /></a>
            <a aria-label="Email" href="mailto:qureshizarmeen17@gmail.com"><Mail size={18} /></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="portfolio-main">
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <span className="tagline">Hi, I build delightful frontends</span>
            <h2 className="hero-title">
              Beautiful, fast, and accessible web experiences — made with React.
            </h2>
            <p className="hero-desc">
              I’m a front-end engineer with 2+ year experience building responsive apps and mobile experiences. I focus on usability, performance and clean code. I love turning designs into delightful interfaces.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">See projects <ExternalLink size={14} /></a>
              <a href="#contact" className="secondary-btn">Contact me</a>
            </div>
            <div className="hero-tags">
              <div>Open to work</div>
              <div>Available for freelance</div>
              <div>React · Next · RN</div>
            </div>
          </motion.div>

      <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="hero-image-wrapper"
>
  <div className="hero-image-card">
    {/* Replace with your chosen Unsplash image (direct URL) */}
    <img 
      src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
      alt="Developer workspace with red accents" 
      className="hero-image"
    />
    <div className="hero-image-content">
      <h3>Selected Project Spotlight</h3>
      <p>Interactive learning mobile app with Urdu support and gamification features.</p>
      <div className="hero-image-buttons">
        <a className="primary-tag">Case study</a>
        <a className="secondary-tag">Live demo</a>
      </div>
    </div>
  </div>
</motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80" alt="avatar" />
          </div>
          <div className="about-content">
            <h3>About me</h3>
            <p>I’m Zarmeen — a frontend engineer who loves clean UI, smooth animations, and performance.
                 Highly motivated and detail-oriented React.js Developer with 1 year of hands-on experience at Eritheia Labs, building responsive and
 high-performing web applications. Skilled in JavaScript, frontend development, and UI/UX best practices. Proficient in integrating
 RESTful APIs and optimizing applications for performance and scalability. Experienced in working within Agile teams, delivering pixel
perfect user interfaces using modern frameworks and SEO-friendly coding standards. Seeking to contribute to dynamic teams and
 challenging projects that promote innovation and continuous learning.
            </p>
            <div className="about-tags">
              <div>1 year experience</div>
              <div>React Js/ React Native (familiar)</div>
           
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects">
          <h3>Projects</h3>
          <div className="projects-grid">
            {projects.map((p) => (
              <motion.article key={p.title} whileHover={{ y: -6 }} className="project-card">
                <div className="project-header">
                  <h4>{p.title}</h4>
                  <span className="featured-tag">Featured</span>
                </div>
                <p>{p.desc}</p>
                <div className="tech-stack">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={p.url}>View <ExternalLink size={14} /></a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s} className="skill-item">{s}</div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>I’m open to job opportunities and freelance work...</p>
          </div>
          <form className="contact-form">
            <label>Name</label>
            <input placeholder="Your name" />
            <label>Email</label>
            <input placeholder="you@example.com" />
            <label>Message</label>
            <textarea rows={4} placeholder="Brief description..." />
            <button type="button">Send message</button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          Made with ❤️ • Zarmeen Qureshi • {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
