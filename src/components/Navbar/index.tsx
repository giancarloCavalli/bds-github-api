import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <div className="nav-container bg-primary">
      <Link to="/" className="nav-title">
        <h5>Github API</h5>
      </Link>
    </div>
  )
}

export default Navbar;