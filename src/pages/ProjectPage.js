import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProject } from '../redux/projectSlice';

function ProjectPage() {
  const projects = useSelector(state => state.project.projects);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleAddProject = () => {
    if (name.trim()) {
      dispatch(addProject({ name }));
      setName('');
    }
  };

  return (
    <div>
      <h1>Group Projects</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Project Name"
      />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((proj, idx) => (
          <li key={idx}>{proj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectPage;
