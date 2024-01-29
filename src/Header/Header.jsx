import './Header.css';
import HeaderImage from '../assets/HeaderImage.jpg';
import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Hamburger from './Hamburger/Hamburger';
import Hamburgernav from './Hamburgernav/Hamburgernav';
import DarkMode from './Darkmode/DarkMode';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="Header">
            <nav className="header-navbar">
                <div className="logo">
                    <img src={HeaderImage} alt="Header-image" />
                    <h5>
                        Alvin<span> Samuelsson</span>
                    </h5>
                </div>
                <Navbar />
                <Hamburger setOpen={setOpen} open={open} />
                {open && <Hamburgernav setOpen={setOpen} />}
            </nav>
            <DarkMode />
        </header>
    );
};

export default Header;
