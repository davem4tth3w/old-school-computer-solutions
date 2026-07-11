import { useState } from "react";
import { Link } from "react-router-dom";

import "../Navbar/navbar.css";
import navLogo from "../../assets/img/nav_logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <img
                src={navLogo}
                className="nav-logo"
                alt="Old School Computer Solutions Logo"
            />

            <button
                className="menu-toggle"
                onClick={toggleMenu}
            >
                <i
                    className={`fa-solid ${
                        menuOpen ? "fa-xmark" : "fa-bars"
                    }`}
                ></i>
            </button>

            <nav
                className={menuOpen ? "active" : ""}
                id="navMenu"
            >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;