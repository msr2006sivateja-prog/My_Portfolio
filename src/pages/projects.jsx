import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
function Projects() {
    return (
        <main className="projects-page">

            <section className="projects-section">

                <h1>My Projects</h1>

                <p className="projects-intro">
                    Here are some of the projects I have worked on
                    while learning software development and AI.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key = {project.title}
                            title = {project.title}
                            description = {project.description}
                            technologies = {project.technologies}
                            image = {project.image}
                            link = {project.link}
                        />
                    ))}
                </div>

            </section>

        </main>
    )
}

export default Projects