import Project from '../../components/Project/Project';
import { listMobile, listWeb } from './list';
import './projects.css'

function Projects() {
    return (
        <div className="projectsContainer">
            <h2 className='sectionTitle'>Proyectos destacados</h2>
            <div className='projectsList'>
                {listWeb.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
                {listMobile.map((project, index) => (
                    <Project key={index} project={project} />
                ))}

            </div>
        </div>
    )
}

export default Projects;