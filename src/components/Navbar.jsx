import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
       
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrolly >=100) {
            setColor(true);
        } else {
            setColor(false);
        }
        };

        window.addEventListener("scroll", changeColor);
        return (
        <div className={color ? "header header-bg" : "header" }>
            <Link to="/">
                <h1> IEO </h1>
            </Link>
            <ul className={ click ? "nav-menu active" : "nav-menu" } >
            <li>
            <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
      <AnchorLink href="#projects">Projects</AnchorLink>
               
            </li>
            <li>
            <AnchorLink href="#about">About</AnchorLink>
               
            </li>
            <li>
      <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
            </ul>
            <div className="hamburger" onClick={ handleClick }>
                {click ? (< FaTimes  size={20} style={{color: "#fff"}} />) : 
                (  < FaBars  size={20} style={{color: "#fff"}} />)};
            </div>
        </div>
    )
}

export default Navbar;