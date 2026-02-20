import React, { useEffect, useState } from "react";
import profileImage from "./assets/profile.jpg";

const Divider = () => <div className="section-divider my-12" />;

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-200 font-sans overflow-x-hidden">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)]"></div>

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center sticky top-0 bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
        <h1 className="text-lg font-semibold">Kiran Jagdale</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-green-400 transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-green-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>
          <a href="#education" className="hover:text-green-400 transition">
            Education
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-6 space-y-4 text-gray-400 md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Java Backend Developer
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Backend developer with 2.5 years of experience building
            transaction-driven systems using Spring Boot, MySQL, and messaging
            queues. Strong in REST API development, lifecycle logic, and
            production issue resolution.
          </p>

          <div className="mt-8">
            <a
              href="https://linkedin.com/in/kiran-jagdale-49375324b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src={profileImage}
            alt="Kiran Jagdale"
            className="w-64 h-65 object-cover rounded-3xl border border-gray-700 shadow-lg"
          />
        </div>
      </section>

      <Divider />

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>

        <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-gray-400">
          <div>
            <span className="text-white font-medium">Languages:</span> Java
          </div>
          <div>
            <span className="text-white font-medium">Database:</span> MySQL
          </div>
          <div>
            <span className="text-white font-medium">Backend:</span> Spring
            Boot, Spring Data JPA, Hibernate, REST APIs
          </div>
          <div>
            <span className="text-white font-medium">Messaging:</span> RabbitMQ,
            Kafka
          </div>
          <div>
            <span className="text-white font-medium">DevOps:</span> Docker, Git,
            Postman, Jira
          </div>
          <div>
            <span className="text-white font-medium">Cloud:</span> AWS EC2, RDS,
            S3, CloudWatch
          </div>
        </div>
      </section>

      <Divider />

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>

        <h4 className="text-lg font-semibold">Associate System Analyst</h4>
        <p className="text-green-400 mb-3">
          Transactbox Technology | Oct 2023 – Present
        </p>

        <ul className="space-y-2 text-gray-400 list-disc list-inside leading-relaxed">
          <li>Developed backend modules handling transaction workflows.</li>
          <li>Built REST APIs using Spring Boot and MySQL.</li>
          <li>Implemented lifecycle validation and business logic.</li>
          <li>Used RabbitMQ for asynchronous processing and retries.</li>
          <li>Debugged and resolved production issues.</li>
        </ul>
      </section>

      <Divider />

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-8">Projects</h3>
        <div className="space-y-10 text-gray-400">
          <div>
            <p className="text-white text-lg font-medium mb-2">
              Transaction Processing Module
            </p>
            <p>
              Backend workflow system managing lifecycle states from initiation
              to completion using Spring Boot and JPA transaction management.
            </p>
          </div>

          <div>
            <p className="text-white text-lg font-medium mb-2">
              Asynchronous Background Processing
            </p>
            <p>
              RabbitMQ-based background processing for retries and external API
              integrations.
            </p>
          </div>

          <div>
            <p className="text-white text-lg font-medium mb-2">
              Production Deployment & Monitoring
            </p>
            <p>
              Dockerized Spring Boot applications deployed on AWS EC2 with log
              monitoring and structured logging.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Open for Backend Developer Roles
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:jagdalek616@gmail.com"
            className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-medium transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/kiran-jagdale-49375324b/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-green-400 hover:text-green-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Mumbai, Maharashtra • 7028382926
        </p>
      </section>

      <footer className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kiran Jagdale
      </footer>
    </div>
  );
}

export default App;
