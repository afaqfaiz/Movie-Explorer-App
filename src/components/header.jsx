import React from 'react'
import './header.css'

function Header() {

    return (
        <header className="Navbar">
            <div className="logo">Movies</div>
            <nav className="nav">
                <a href="#">Movie</a>
                <a href="#">About</a>
            </nav>
        </header>
    );
}

export default Header;
