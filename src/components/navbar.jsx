import { Link } from "react-router-dom";
function Navbar({darkMode, setDarkMode}) {
    return (
        <nav>
            <h1>My Portfolio</h1>
            <div className = "nav-links">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <button
                    className="theme-button"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle theme"
                >
                    {darkMode ? '☼' : '☾'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar