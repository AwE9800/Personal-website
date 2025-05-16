import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburgernav.css';

const Hamburgernav = ({ setOpen }) => {
    return (
        <nav className="Mobile-nav">
            <Link onClick={() => setOpen(false)} to="/">
                Home
            </Link>
            <span className=""></span>
            <Link onClick={() => setOpen(false)} to="/AboutMe">
                About Me
            </Link>
            <span></span>
            <Link onClick={() => setOpen(false)} to="/Portfolio">
                Portfolio
            </Link>
            <span></span>
            <Link onClick={() => setOpen(false)} to="/Contact">
                Contact
            </Link>
        </nav>
    );
};

export default Hamburgernav;
