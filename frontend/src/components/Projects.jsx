import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-4">Proyectos</h3>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Tecnologías:</strong> {project.technologies}</p>
                {project.project_url && (
                  <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
