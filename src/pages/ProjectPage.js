import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addProject } from '../redux/projectSlice';
import { fetchDummyProjects } from '../utils/api';

function ProjectPage() {
  const projects = useSelector(state => state.project.projects);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchDummyProjects()
      .then((items) => {
        items.forEach(item => dispatch(addProject(item)));
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load projects');
        setLoading(false);
      });
  }, [dispatch]);

  const handleAddProject = () => {
    if (name.trim()) {
      dispatch(addProject({ name }));
      setName('');
    }
  };

  return (
    <div>
      <h1>Group Projects</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Project Name" />
      <button onClick={handleAddProject}>Add Project</button>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {projects.map((proj, idx) => <li key={idx}>{proj.name}</li>)}
      </ul>
    </div>
  );
}

export default ProjectPage;
