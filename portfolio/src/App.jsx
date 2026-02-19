function App() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Kiran Jagdale</h1>
        <div className="space-x-6 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#stack" className="hover:text-white transition">
            Stack
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Backend Engineer building secure and scalable systems.
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mb-8">
          2 years of experience designing REST APIs with Spring Boot,
          implementing secure authentication mechanisms, managing relational
          databases, and deploying production applications on AWS EC2.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            View Work
          </a>

          <a
            href="https://github.com/Jagdale4136/"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section id="stack" className="border-t border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Tech Stack</h3>

          <div className="grid md:grid-cols-3 gap-10 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-4">Backend</h4>
              <ul className="space-y-2">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>JWT Authentication</li>
                <li>Hibernate / JPA</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Infrastructure</h4>
              <ul className="space-y-2">
                <li>AWS EC2 Deployment</li>
                <li>Docker</li>
                <li>Linux Server Management</li>
                <li>Git</li>
                <li>Application Monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Frontend</h4>
              <ul className="space-y-2">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>REST API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="border-t border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Selected Systems</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Role System */}
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition">
              <h4 className="text-2xl font-semibold mb-4">
                Multi-Role Management System
              </h4>

              <p className="text-gray-400 mb-6">
                Designed and implemented a backend system supporting multiple
                user roles with hierarchical access control. Implemented
                JWT-based authentication, account status handling, and secure
                API endpoints with role-based restrictions.
              </p>

              <p className="text-sm text-gray-500">
                Spring Boot • Spring Security • JWT • MySQL • AWS Deployment
              </p>
            </div>

            {/* Fixed Term Booking System */}
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition">
              <h4 className="text-2xl font-semibold mb-4">
                Time-Based Investment Booking System
              </h4>

              <p className="text-gray-400 mb-6">
                Developed backend services for managing time-bound financial
                bookings. Implemented maturity calculations, status transitions,
                transactional integrity using JPA, and validation logic to
                ensure data consistency.
              </p>

              <p className="text-sm text-gray-500">
                Spring Boot • JPA • MySQL • Transaction Management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="border-t border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8">Experience</h3>

          <p className="text-gray-400 leading-relaxed max-w-4xl">
            Backend engineer with 2 years of professional experience building
            secure REST APIs, implementing role-based authorization, managing
            relational databases, and deploying applications in AWS
            environments. Experienced in resolving real production challenges
            including database version conflicts, UUID handling strategies, CORS
            configuration issues, and Linux server debugging.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="border-t border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Open to Backend & System-Focused Roles
          </h3>

          <p className="text-gray-400 mb-8">
            Interested in opportunities involving scalable backend systems,
            secure architectures, and production deployments.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:jagdalek616@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/kiran-jagdale-49375324b/"
              target="_blank"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kiran Jagdale — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
