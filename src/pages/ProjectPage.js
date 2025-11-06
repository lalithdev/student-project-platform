import { Container, Typography, TextField, Button, List, ListItem, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProject } from '../redux/projectSlice';
import useLocalStorage from '../hooks/useLocalStorage';

function ProjectPage() {
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAddProject = () => {
    if (name.trim()) {
      const newProj = { name };
      setProjects([...projects, newProj]);
      dispatch(addProject(newProj));
      setName('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Group Projects</Typography>
      <TextField
        variant="outlined"
        label="Project Name"
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddProject}>
        Add Project
      </Button>
      <List>
        {projects.map((proj, idx) => (
          <ListItem key={idx}>
            <Paper sx={{ padding: 1, width: '100%' }}>{proj.name}</Paper>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProjectPage;
