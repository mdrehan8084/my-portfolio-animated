import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCarSide } from "react-icons/fa";
import { FiExternalLink, FiDownload } from "react-icons/fi";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family:'Poppins',sans-serif;
  background:#050816;
  color:#fff;
  overflow-x:hidden;
}

:root{
  --bg:#050816;
  --card:#0b1025;
  --card2:#111936;
  --purple:#8b5cf6;
  --cyan:#22d3ee;
  --pink:#ec4899;
  --text:#ffffff;
  --muted:#a5b4fc;
  --border:rgba(255,255,255,.1);
}

body::before{
  content:"";
  position:fixed;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%,rgba(139,92,246,.25),transparent 28%),
    radial-gradient(circle at 80% 30%,rgba(34,211,238,.18),transparent 25%),
    radial-gradient(circle at 50% 90%,rgba(236,72,153,.14),transparent 30%);
  pointer-events:none;
  z-index:-2;
}

.nav{
  position:fixed;
  top:0;left:0;right:0;
  z-index:100;
  height:78px;
  padding:0 8%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:rgba(5,8,22,.72);
  backdrop-filter:blur(18px);
  border-bottom:1px solid var(--border);
}

.logo{
  font-size:25px;
  font-weight:900;
  letter-spacing:.5px;
}
.logo span{
  background:linear-gradient(90deg,var(--purple),var(--cyan));
  -webkit-background-clip:text;
  color:transparent;
}

.nav-links{
  list-style:none;
  display:flex;
  gap:28px;
}
.nav-links a{
  color:#dbeafe;
  text-decoration:none;
  font-size:14px;
  font-weight:600;
  text-transform:capitalize;
  position:relative;
}
.nav-links a::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-7px;
  width:0;
  height:2px;
  background:linear-gradient(90deg,var(--purple),var(--cyan));
  transition:.3s;
}
.nav-links a:hover::after{width:100%}
.nav-links a:hover{color:#fff}

.nav-btn{
  padding:11px 24px;
  border-radius:999px;
  background:linear-gradient(90deg,var(--purple),var(--cyan));
  color:#fff;
  text-decoration:none;
  font-weight:700;
  box-shadow:0 0 25px rgba(139,92,246,.4);
}

section{
  padding:110px 8%;
}

.hero{
  min-height:100vh;
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:55px;
  align-items:center;
  position:relative;
}

.hero-small{
  display:inline-flex;
  padding:10px 18px;
  border-radius:999px;
  background:rgba(255,255,255,.06);
  border:1px solid var(--border);
  color:#dbeafe;
  margin-bottom:24px;
  font-size:14px;
}

.hero h1{
  font-size:clamp(38px,5vw,58px);
  line-height:1.12;
  font-weight:800;
}
.hero h1 span{
  background:linear-gradient(90deg,var(--purple),var(--cyan),var(--pink));
  -webkit-background-clip:text;
  color:transparent;
}

.hero h2{
  margin-top:16px;
  font-size:22px;
  color:#e0e7ff;
  font-weight:600;
}
.hero p{
  margin:22px 0 32px;
  color:#b6c2ff;
  line-height:1.75;
  max-width:620px;
  font-size:15.5px;
}
.btns{
  display:flex;
  gap:16px;
  flex-wrap:wrap;
}
.btn{
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:14px 26px;
  border-radius:999px;
  color:#fff;
  text-decoration:none;
  font-weight:700;
  border:1px solid var(--border);
  background:rgba(255,255,255,.05);
  transition:.3s;
}
.btn-main{
  background:linear-gradient(90deg,var(--purple),var(--cyan));
  border:0;
  box-shadow:0 0 30px rgba(139,92,246,.35);
}
.btn:hover{
  transform:translateY(-5px);
}

.hero-card{
  position:relative;
  border-radius:36px;
  padding:24px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 35px 100px rgba(0,0,0,.45);
  overflow:hidden;
}

.hero-card::before{
  content:"";
  position:absolute;
  width:220px;
  height:220px;
  border-radius:50%;
  background:rgba(34,211,238,.18);
  top:-70px;
  right:-70px;
  filter:blur(20px);
}

.hero-card::after{
  content:"";
  position:absolute;
  inset:-3px;
  background:linear-gradient(120deg,var(--purple),var(--cyan),var(--pink),var(--purple));
  z-index:-1;
  filter:blur(18px);
  opacity:.55;
  animation:spinGlow 5s linear infinite;
}
.avatar{
  height:390px;
  border-radius:28px;
  overflow:hidden;
  background:#090d20;
  position:relative;
}
  .avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
  filter:saturate(1.1) contrast(1.04);
}

@keyframes spinGlow{
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
}

.float-info{
  margin-top:20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
.info-box{
  background:rgba(255,255,255,.06);
  border:1px solid var(--border);
  border-radius:18px;
  padding:16px;
}
.info-box b{
  font-size:20px;
}
.info-box span{
  display:block;
  color:var(--muted);
  font-size:13px;
}

.section-title{
  text-align:center;
  margin-bottom:60px;
}
.section-title span{
  color:var(--cyan);
  font-size:14px;
  letter-spacing:3px;
  text-transform:uppercase;
}
.section-title h2{
  font-size:clamp(34px,5vw,54px);
  margin-top:10px;
}
.section-title p{
  color:var(--muted);
  margin-top:12px;
}

.about-grid{
  display:grid;
  grid-template-columns:1.3fr .7fr;
  gap:26px;
}
.card{
  background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.025));
  border:1px solid var(--border);
  border-radius:26px;
  padding:32px;
  transition:.3s;
}
.card:hover{
  border-color:rgba(34,211,238,.35);
  box-shadow:0 0 45px rgba(34,211,238,.08);
}
.card h3{
  font-size:26px;
  margin-bottom:16px;
}
.card p{
  color:#c7d2fe;
  line-height:1.8;
}

.skills-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:22px;
}
.skill{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:24px;
  padding:28px 18px;
  text-align:center;
  position:relative;
  overflow:hidden;
}
.skill::after{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height:4px;
  background:linear-gradient(90deg,var(--purple),var(--cyan));
}
.skill-icon{
  font-size:42px;
  margin-bottom:14px;
}
.skill h3{
  font-size:18px;
}
body{
  font-family:'Poppins',sans-serif;
  background:#050816;
  color:#fff;
  overflow-x:hidden;
  font-size:15px;
}
.projects-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
}
.project{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:28px;
  overflow:hidden;
  position:relative;
}
.project-top{
  height:180px;
  background:
    linear-gradient(135deg,rgba(139,92,246,.25),rgba(34,211,238,.14)),
    #0a0f25;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:64px;
}
.project-body{
  padding:25px;
}
.project-body h3{
  font-size:22px;
  margin-bottom:12px;
}
.project-body p{
  color:#c7d2fe;
  line-height:1.7;
  font-size:14px;
}
.tags{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:17px;
}
.tags span{
  padding:6px 10px;
  border-radius:999px;
  background:rgba(139,92,246,.14);
  color:#ddd6fe;
  font-size:12px;
}
.project-links{
  display:flex;
  gap:14px;
  margin-top:18px;
}
.project-links a{
  width:38px;
  height:38px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  color:#fff;
  background:rgba(255,255,255,.06);
  border:1px solid var(--border);
  text-decoration:none;
}

.resume-card{
  max-width:900px;
  margin:auto;
  background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));
  border:1px solid var(--border);
  border-radius:28px;
  padding:30px;
}
.resume-card p{
  color:#c7d2fe;
  margin-bottom:18px;
}
.resume-frame{
  width:100%;
  height:580px;
  border:1px solid var(--border);
  border-radius:18px;
  background:white;
}
.resume-actions{
  display:flex;
  gap:16px;
  margin-top:22px;
  flex-wrap:wrap;
}

.contact-grid{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:30px;
}
.contact-list{
  display:flex;
  flex-direction:column;
  gap:16px;
}
.contact-item{
  padding:20px;
  border-radius:18px;
  background:var(--card);
  border:1px solid var(--border);
  color:#fff;
  text-decoration:none;
}
.contact-item span{
  color:var(--cyan);
  display:block;
  margin-bottom:4px;
  font-size:13px;
}
.form{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:28px;
  padding:28px;
}
.form input,.form textarea{
  width:100%;
  padding:15px 16px;
  border-radius:14px;
  background:#070b1c;
  border:1px solid var(--border);
  color:#fff;
  margin-bottom:15px;
  font-family:inherit;
}
.form textarea{
  min-height:130px;
}
.form button{
  cursor:pointer;
}

.footer{
  padding:35px 8%;
  border-top:1px solid var(--border);
  display:flex;
  justify-content:space-between;
  color:#a5b4fc;
}

@media(max-width:1000px){
  .hero,.about-grid,.contact-grid{grid-template-columns:1fr}
  .skills-grid,.projects-grid{grid-template-columns:repeat(2,1fr)}
  .hero-card{max-width:520px}
}
@media(max-width:650px){
  .nav-links{display:none}
  .nav{padding:0 6%}
  section{padding:95px 6%}
  .skills-grid,.projects-grid{grid-template-columns:1fr}
  .hero h1{font-size:44px}
  .resume-frame{height:450px}
  .footer{flex-direction:column;gap:10px}
}
`;

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

const skills = [
  ["🌐", "HTML5"],
  ["🎨", "CSS3"],
  ["🧩", "Bootstrap"],
  ["⚡", "JavaScript"],
  ["⚛️", "React.js"],
  ["🧠", "Redux Toolkit"],
  ["🐘", "PHP"],
  ["🔴", "Laravel"],
  ["🗄️", "MySQL"],
  ["📝", "WordPress"],
  ["🔁", "REST APIs"],
  ["🛠️", "Git & GitHub"],
];

const projects = [
  {
    icon: <FaCarSide />,
    name: "CarDekho Clone",
    desc: "Responsive car listing platform built with React.js, Redux Toolkit, reusable components, routing and API integration.",
    stack: ["React", "Redux", "Bootstrap"],
    gh: "https://github.com/mdrehan8084/carDekho-clone-frontend",
    live: "https://car-dekho-clone-frontend.vercel.app",
  },
  {
    icon: "🛒",
    name: "E-Commerce Website",
    desc: "Laravel based e-commerce project with product management, authentication, CRUD operations and MySQL integration.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    gh: "https://github.com/mdrehan8084/responship-ecommerce-website",
    live: "#",
  },
  {
    icon: "🎓",
    name: "Student Management System",
    desc: "Student/course CRUD, file upload, authentication, pagination, dashboard, soft delete and restore functionality.",
    stack: ["Laravel", "PHP", "MySQL"],
    gh: "https://github.com/mdrehan8084/student-management-system",
    live: "#",
  },
  {
    icon: "👥",
    name: "Multi User Login System",
    desc: "Core PHP role-based login system with Admin, HR and Digital Marketing dashboards with session management.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    gh: "https://github.com/mdrehan8084/multi-user-system-adminpanel",
    live: "https://mdrehan8084.howto.rocks/login.php",
  },

  {
    icon: "🍔",
    name: "Food Delivery System",
    desc: "Food ordering application with restaurant listings, menu management and order processing features.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    gh: "https://github.com/mdrehan8084/food-delivery-system-app",
    live: "#",
  },
  {
    icon: "🌦️",
    name: "Weather API App",
    desc: "Weather forecast app using REST API integration to display real-time weather data with clean responsive UI.",
    stack: ["JavaScript", "API", "CSS"],
    gh: "https://github.com/mdrehan8084/weather-api-test",
    live: "#",
  },
  {
    icon: "📝",
    name: "Office Blog WordPress",
    desc: "WordPress blog website with responsive layout, categories, pages and content management features.",
    stack: ["WordPress", "PHP", "CSS"],
    gh: "https://github.com/mdrehan8084/office-blog-wordpress",
    live: "#",
  },
  {
    icon: "⚛️",
    name: "Portfolio Website",
    desc: "Personal developer portfolio built with React.js and plain CSS. Dark theme, animated hero section, and fully responsive.",
    stack: ["React.js", "CSS", "Vite"],
    gh: "https://github.com/mdrehan8084/my-portfoilio",
    live: "https://my-portfolio-dhlv.vercel.app/",
  },

  {
    icon: "🌐",
    name: "Portfolio Website",
    desc: "Modern animated developer portfolio built using React.js. Features smooth scrolling, Framer Motion animations, project showcase, resume preview, GitHub integration, and responsive design.",
    stack: ["React.js", "Framer Motion", "CSS", "Vite"],
    gh: "https://github.com/mdrehan8084/my-portfolio-animated",
    live: "#",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        Md<span>Rehan</span>
      </div>
      <ul className="nav-links">
        {["home", "about", "skills", "projects", "resume", "contact"].map(
          (x) => (
            <li key={x}>
              <a href={`#${x}`}>{x}</a>
            </li>
          ),
        )}
      </ul>
      <a href="#contact" className="nav-btn">
        Hire Me
      </a>
    </nav>
  );
}

function SectionTitle({ top, title, sub }) {
  return (
    <motion.div
      className="section-title"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <span>{top}</span>
      <h2>{title}</h2>
      <p>{sub}</p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div className="hero-small" variants={fadeUp}>
          🚀 Available for Internship / Junior Developer Roles
        </motion.div>

        <motion.h1 variants={fadeUp}>
          Hi, I'm <br />
          <span>Md Rehan</span>
        </motion.h1>

        <motion.h2 variants={fadeUp}>Laravel & React Developer</motion.h2>

        <motion.p variants={fadeUp}>
          Full Stack Web Developer skilled in Laravel, React.js, PHP, MySQL,
          Bootstrap, WordPress and REST APIs. I build responsive, modern and
          database-driven web applications.
        </motion.p>

        <motion.div className="btns" variants={fadeUp}>
          <a href="#projects" className="btn btn-main">
            View Projects
          </a>

          <a href="#resume" className="btn">
            <FiDownload /> Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, x: 90, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
        whileHover={{ y: -12, rotate: 1 }}
      >
        <motion.div
          className="avatar"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 25px rgba(139,92,246,.25)",
              "0 0 45px rgba(34,211,238,.35)",
              "0 0 25px rgba(139,92,246,.25)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src="/rehan-photo.jpeg" alt="Md Rehan" />
        </motion.div>

        <div className="float-info">
          <motion.div
            className="info-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <b>8+</b>
            <span>Projects</span>
          </motion.div>

          <motion.div
            className="info-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <b>1+</b>
            <span>Year Training</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
function About() {
  return (
    <section id="about">
      <SectionTitle
        top="About Me"
        title="Who I Am"
        sub="A fresher web developer focused on real projects"
      />

      <motion.div
        className="about-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={fadeUp}>
          <h3>Full Stack Developer</h3>
          <p>
            I am Md Rehan, a Full Stack Web Developer from Delhi. I have
            hands-on experience in HTML, CSS, Bootstrap, JavaScript, React.js,
            PHP, Laravel, MySQL, WordPress, Git and GitHub. I have built
            projects like CarDekho Clone, E-Commerce Website, Student Management
            System, Food Delivery App and Multi User Login System.
          </p>
        </motion.div>

        <motion.div className="card" variants={fadeUp}>
          <h3>Education & Training</h3>
          <p>
            <b>B.A. Program</b>
            <br />
            University of Delhi
            <br />
            2025 – 2028
            <br />
            <br />
            <b>Full Stack Web Development</b>
            <br />
            Next-G Education, Delhi
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionTitle
        top="Skills"
        title="Technical Proficiency"
        sub="Technologies I work with"
      />

      <motion.div
        className="skills-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map(([icon, name]) => (
          <motion.div
            className="skill"
            key={name}
            variants={fadeUp}
            whileHover={{ y: -12, scale: 1.04 }}
          >
            <div className="skill-icon">{icon}</div>
            <h3>{name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionTitle
        top="Projects"
        title="Featured Work"
        sub="Real projects from my GitHub portfolio"
      />

      <motion.div
        className="projects-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <motion.div
            className="project"
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -14, scale: 1.02 }}
          >
            <div className="project-top">{p.icon}</div>
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.gh} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume">
      <SectionTitle
        top="Resume"
        title="My Resume"
        sub="Preview and download my latest resume"
      />

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 70, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>Preview below, or download the file directly.</p>
        <iframe
          src="/mdrehan-resume.pdf"
          title="Md Rehan Resume"
          className="resume-frame"
        />
        <div className="resume-actions">
          <a href="/mdrehan-resume.pdf" download className="btn btn-main">
            <FiDownload /> Download PDF
          </a>
          <a
            href="/mdrehan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Open Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <SectionTitle
        top="Contact"
        title="Let's Work Together"
        sub="Open for internship, junior roles and freelance work"
      />

      <motion.div
        className="contact-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="contact-list" variants={fadeUp}>
          <a className="contact-item" href="mailto:rehanmd62076@gmail.com">
            <span>Email</span>rehanmd62076@gmail.com
          </a>
          <a className="contact-item" href="tel:+918084524725">
            <span>Phone</span>+91 8084524725
          </a>
          <a className="contact-item" href="tel:+916204293932">
            <span>Alternate Phone</span>+91 6204293932
          </a>
          <a
            className="contact-item"
            href="https://github.com/mdrehan8084"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>github.com/mdrehan8084
          </a>
          <a
            className="contact-item"
            href="https://linkedin.com/in/mdrehan-565331415"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>linkedin.com/in/mdrehan-565331415
          </a>
        </motion.div>

        <motion.form
          className="form"
          variants={fadeUp}
          onSubmit={(e) => e.preventDefault()}
        >
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Tell me about your project..." />
          <button className="btn btn-main">Send Message</button>
        </motion.form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Designed & Built by Md Rehan · 2026</p>
      <p>
        <FaGithub /> GitHub &nbsp; | &nbsp; <FaLinkedin /> LinkedIn
      </p>
    </footer>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
