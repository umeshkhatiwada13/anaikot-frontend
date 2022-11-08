import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

// Hashlink is used to slide through same page 
// while link is used to change page without reloading the page
const Header = () => {
    return (
        <nav>
            <h1>Anaikot</h1>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#brands"}>Brands</HashLink>
                <Link to={"/services"}>Services</Link>
            </main>
        </nav>
    )
}

export default Header;