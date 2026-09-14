import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProjectDetail() {
    const { projectId } = useParams()

    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/api/projects/${projectId}`)
            .then(async (response) => {
                const data = await response.json()

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Project not found')
                    }

                throw new Error('Unable to fetch project. Please try again later.')
                }

                return data
            })
            .then((data) => {
                setProject(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [projectId])

    if (loading) {
        return (
            <main className="projects-page">
                <section className="projects-section">
                    <h1>Loading project...</h1>
                </section>
            </main>
        )
    }

    if (error) {
        return (
            <main className="projects-page">
                <section className="projects-section">
                    <h1>{error}</h1>
                    <Link to="/projects">
                        Back to Projects
                    </Link>
                </section>
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
                    {project.techStack}
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