import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
