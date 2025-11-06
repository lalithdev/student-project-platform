import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addProject } from '../redux/projectSlice';
import useLocalStorage from '../hooks/useLocalStorage';

function ProjectPage() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [name, setName] = useState('');

  useEffect(() => {
    projects.forEach(item => dispatch(addProject(item)));
    // Only runs once on mount
    // eslint-disable-next-line
  }, []);

  const handleAddProject = () => {
    if (name.trim()) {
      const newProj = { name };
      setProjects([...projects, newProj]);
      dispatch(addProject(newProj));
      setName('');
    }
  };

  return (
    <div>
      <h1>Group Projects</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Project Name" />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((proj, idx) => <li key={idx}>{proj.name}</li>)}
      </ul>
    </div>
  );
}

export default ProjectPage;
