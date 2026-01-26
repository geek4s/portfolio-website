function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>To-Do App</h3>
                    <p>
                        A to-do list with filters and local storage support
                    </p>
                    <p className="tech-stack">React, CSS, JavaScript</p>
                    <div className="project-links">
                        <a href="#">Github</a>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <h3>Weather Dashboard</h3>
                    <p> 
                        Displays real-time weather data based on location.
                    </p>
                    <p className="tech-stack">JavaScript, API, Tailwind CSS</p>
                    <div className="project-links">
                        <a href="#">Github</a>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;
