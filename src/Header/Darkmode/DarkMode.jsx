import { useSelector, useDispatch } from 'react-redux';
import { selectDarkMode, toggleTheme } from '../../app/theme/themeSlice';
import { useEffect } from 'react';
import './DarkMode.css';

// DarkMode component to toggle dark/light mode
function DarkMode() {
    // Use selector to get darkMode from the Redux store
    const theme = useSelector(selectDarkMode);
    // Get dispatch function from Redux store
    const dispatch = useDispatch();
    // Handle button click to toggle theme
    const handleClick = () => {
        dispatch(toggleTheme());
    };
    // useEffect to set the 'data-theme' attribute based on theme state
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');
    }, [theme]);

    // Render the DarkMode component
    return (
        <div className="dark-mode">
            <button className="dark-mode-btn" onClick={() => handleClick()}>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default DarkMode;
