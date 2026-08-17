import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
    const { projectId } = useParams()

    const project = projects[projectId]

    if (!project) {
        return (
            <main className="projects-page">
                <h1>Project Not Found</h1>

                <Link to="/projects">
                    Back to Projects
                </Link>
            </main>
        )
    }

    return (
        <main className="projects-page">

            <section className="projects-section">

                <h1>{project.title}</h1>

                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />

                <p className="projects-intro">
                    {project.description}
                </p>

                <p>
                    <strong>Technologies:</strong>{' '}
                    {project.technologies}
                </p>

                <br />

                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button"
                >
                    View Project
                </a>

                <br />
                <br />

                <Link to="/projects">
                    ← Back to Projects
                </Link>

            </section>

        </main>
    )
}

export default ProjectDetail