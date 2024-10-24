import React from 'react'
import './header.css'
import { Outlet, Link } from "react-router-dom";
function Header() {

    return (
        <header className="Navbar">
            <div className="logo">Movies</div>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Movie Details</a>
                <a href="#">Favorites</a>
            </nav>
        </header>
    );
}

export default Header;
