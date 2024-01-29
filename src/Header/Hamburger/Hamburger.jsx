import './Hamburger.css';

const Hamburger = ({ setOpen, open }) => {
    const toggleMenu = () => {
        // Using the functional form of setState to toggle the 'open' state
        setOpen(prev => !prev);
    };

    return (
        // Adding conditional classes based on the 'open' state to control the styling
        <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
            <span className=" bars top-bar"></span>
            <span className=" bars middle-bar"></span>
            <span className="bars second-middle-bar"></span>
            <span className=" bars bottom-bar"></span>
        </div>
    );
};

export default Hamburger;
