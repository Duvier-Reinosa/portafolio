import './project.css'

interface ProjectProps {
    project: {
        title: string,
        description: string,
        role: string,
        techs: string[],
        image: string
    }
}

function Project({ project } : ProjectProps) {
  return (
    <div className="projectContainer">
        <div className='projectImageContainer'>
            <img src={project.image} alt="" />
        </div>
        <div className='projectTextContainer'>
            <h3>{project.title}</h3>
            <p className='projectDescription'>{project.description}</p>
            <p className='projectRole'>Role: {project.role}</p>
            <div className='techsContainer'>
                {project.techs.map((tech: string, index: number) => (
                    <img src={tech} key={index} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default Project;