import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/admin">Admin Panel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
