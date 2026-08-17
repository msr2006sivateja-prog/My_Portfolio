import ProjectInfo from './ProjectInfo'
function ProjectCard({ title, description, technologies, image, link }) {
    return (
        <div className="project-card">

            <img
                src = {image}
                alt = {title}
                className = "project-image"
            />

            <h2>{title}</h2>

            <p>{description}</p>

            <ProjectInfo technologies = {technologies} />
            
            <a
                href = {link}
                target = "_blank"
                rel = "nonreferrer"
                className="project-button"
            >
                View Project
            </a>

        </div>
    )
}

export default ProjectCard