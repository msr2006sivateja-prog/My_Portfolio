import ProjectCard from '../components/ProjectCard'
import {useEffect, useState} from 'react'
function Projects() {
    const [projects, setProjects] = useState([])
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/projects').then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch projects')
            }
            return response.json()
        })
        .then((data) => {
            setProjects(data)
            setLoading(false)
        })
        .catch(() => {
            setError('Unable to fetch projects. Please try again later.')
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <main className="projects-page">
                <section className="projects-section">
                    <h1>My Projects</h1>
                    <p>Loading projects...</p>
                </section>
            </main>
        )
    }

    if (error) {
        return (
            <main className="projects-page">
                <section className="projects-section">
                    <h1>My Projects</h1>
                    <p>{error}</p>
                </section>
            </main>
        )
    }

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
                            key = {project.id}
                            title = {project.title}
                            description = {project.description}
                            technologies = {project.techStack}
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