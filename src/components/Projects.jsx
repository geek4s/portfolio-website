function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="doodle-heading">Projects</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3>To-Do App</h3>
            <p>A to-do list with filters and local storage support.</p>
            <p className="tech-stack">React, CSS, JavaScript</p>

            <div className="project-links">
              <a
                href="https://github.com/yourusername/todo-app"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p>Displays real-time weather data based on location.</p>
            <p className="tech-stack">JavaScript, API, Tailwind CSS</p>

            <div className="project-links">
              <a
                href="https://github.com/yourusername/weather-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
