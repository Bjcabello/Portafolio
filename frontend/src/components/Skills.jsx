import { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('/api/skills/')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-4">
        <strong>Habilidades</strong>
      </h3>
      <div className="row">
        {skills.map((skill) => (
          <div key={skill.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={skill.icon_url}
                className="card-img-top"
                alt={`${skill.name} icon`}
                style={{ height: "100px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">Nivel: {skill.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
