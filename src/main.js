import './style.css'

document.querySelector('#app').innerHTML = `
<header class="nav">
  <a href="#hero" class="nav-brand">Sanele Buthelezi</a>
  <nav class="nav-links">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#education">Education</a>
    <a href="#contact" class="nav-cta">Contact</a>
  </nav>
  <button class="nav-toggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</header>

<main>
  <section id="hero" class="hero">
    <div class="hero-content">
      <p class="hero-eyebrow">Aspiring Software Developer</p>
      <h1 class="hero-title">Building the future,<br><span class="accent">one line at a time.</span></h1>
      <p class="hero-sub">An entry-level developer who contributes to real projects while focusing on learning, practicing, and building confidence under mentorship..</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-ghost">Get in Touch</a>
      </div>
    </div>
    <div class="hero-card">
      <div class="hero-card-top">
        <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
      </div>
      <pre class="hero-code"><code><span class="c-key">const</span> <span class="c-fn">developer</span> = {
  <span class="c-prop">name</span>: <span class="c-str">'Sanele Buthelezi'</span>,
  <span class="c-prop">focus</span>: <span class="c-str">'Full-Stack Web'</span>,
  <span class="c-prop">learning</span>: [<span class="c-str">'React'</span>, <span class="c-str">'Node'</span>, <span class="c-str">'Python'</span>, <span class="c-str">'Javascript'</span>, <span class="c-str">'C#'</span>],
  <span class="c-prop">available</span>: <span class="c-key">true</span>,
};</code></pre>
    </div>
  </section>

  <section id="about" class="section">
    <div class="section-head">
      <span class="section-num">01</span>
      <h2>About Me</h2>
    </div>
    <div class="about-grid">
      <div class="about-content">
        <p class="about-text">I am an IT inspired individual, passionate and eager to learn more about development of software and advancement of technology. I am currently doing Bachelors degree in Information and Communication Technology (2nd year) at DUT. I believe in hardworking, persistent and ethical success. My focus is clean code, fast performance, and delightful user experiences</p>
        <div class="about-stats">
          <div class="stat"><span class="stat-num">1+</span><span class="stat-label">Years coding</span></div>
          <div class="stat"><span class="stat-num">2</span><span class="stat-label">Projects built</span></div>
          <div class="stat"><span class="stat-num">5</span><span class="stat-label">Open-source PRs</span></div>
        </div>
      </div>
      <div class="about-visual">
        <img class="about-photo" src="./src/assets/hero.jpg" alt="Sanele Buthelezi" loading="lazy" />
      </div>
    </div>
  </section>

  <section id="skills" class="section">
    <div class="section-head">
      <span class="section-num">02</span>
      <h2>Skills</h2>
    </div>
    <div class="skills-grid">
      <div class="skill-card"><h3>Languages</h3><ul class="tags"><li>JavaScript</li><li>Python</li><li>Java</li><li>SQL</li><li>HTML/CSS</li></ul></div>
      <div class="skill-card"><h3>Frameworks</h3><ul class="tags"><li>React</li><li>Node.js</li><li>Express</li><li>Flask</li><li>Tailwind</li></ul></div>
      <div class="skill-card"><h3>Tools</h3><ul class="tags"><li>Git</li><li>VS Code</li><li>Figma</li><li>PostgreSQL</li><li>Docker</li></ul></div>
      <div class="skill-card"><h3>Currently learning</h3><ul class="tags"><li>TypeScript</li><li>AWS</li><li>GraphQL</li><li>Go</li></ul></div>
    </div>
  </section>

  <section id="projects" class="section">
    <div class="section-head">
      <span class="section-num">03</span>
      <h2>Projects</h2>
    </div>
    <div class="projects-grid">
      <article class="project-card">
        <div class="project-top project-top-a">
          <span class="project-emoji">🧩</span>
        </div>
        <div class="project-body">
          <h3>sanele-portfolio</h3>
          <p>This portfolio site built with Vite and modern CSS, showcasing my work, experience, and contact links.</p>
          <ul class="tags"><li>Vite</li><li>JavaScript</li><li>CSS</li></ul>
          <div class="project-links">
            <a href="https://github.com/san313-code/sanele-portfolio" target="_blank" rel="noopener noreferrer" class="link-arrow">View repository →</a>
          </div>
        </div>
      </article>
      <article class="project-card">
        <div class="project-top project-top-b">
          <span class="project-emoji">📦</span>
        </div>
        <div class="project-body">
          <h3>View all repositories</h3>
          <p>Browse the rest of my GitHub repositories to see more projects, experiments, and learning work.</p>
          <ul class="tags"><li>GitHub</li><li>Repositories</li><li>Open source</li></ul>
          <div class="project-links">
            <a href="https://github.com/san313-code?tab=repositories" target="_blank" rel="noopener noreferrer" class="link-arrow">Open GitHub →</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section id="education" class="section">
    <div class="section-head">
      <span class="section-num">04</span>
      <h2>Education & Experience</h2>
    </div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">2025 — Present</span>
          <h3> Bachelor of Information and communication Technology, at DUT</h3>
          <p>Relevant coursework: Data Structures, Algorithms, Web Development, Databases, Operating Systems. GPA 3.8.</p>
        </div>
      
      
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">2025-2026</span>
          <h3>Web App Developer — Planet09ai member</h3>
          <p>Built and maintained ExpenseBud, and mentored first-year students in C#, HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section contact-section">
    <div class="section-head">
      <span class="section-num">05</span>
      <h2>Let's Connect</h2>
    </div>
    <p class="contact-lead">I'm actively looking for internship opportunities and happy to chat about projects, collaborations, or just tech in general.</p>
    <div class="contact-actions">
      <a href="mailto:sanelesbusiso800@gmail.com" class="btn btn-primary">Email Me</a>
      <a href="https://github.com/san313-code/sanele-portfolio" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub</a>
      <a href="https://www.linkedin.com/in/sanele-buthelezi-326b20367/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">LinkedIn</a>
      <a href="#" class="btn btn-ghost">Download Resume</a>
    </div>
  </section>
</main>

<footer class="footer">
  <p>© 2025 Sanele Buthelezi. Crafted with care.</p>
</footer>
`

// Scroll reveal
const revealTargets = document.querySelectorAll('.hero, .section')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)
revealTargets.forEach((el) => observer.observe(el))

// About photo fallback
const aboutPhoto = document.querySelector('.about-photo')
aboutPhoto?.addEventListener('error', () => {
  if (!aboutPhoto.dataset.fallbackLoaded) {
    aboutPhoto.dataset.fallbackLoaded = 'true'
    aboutPhoto.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
  }
})

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')
navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open')
  navToggle.classList.toggle('active', open)
})
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open')
    navToggle?.classList.remove('active')
  })
)

