import React from "react";
import "./Heroimg.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Heroimg() {
    return (
        <div className="hero" id="home">
        <div>
        <div className="content">
        <div className="heroi">
        <p className="hip">Hi 👋, my name is</p>
        <h1 className="h1i">Ijeoma Odinko.</h1>
        <h2 className= "h2i"> I build  digital solutions.</h2>
        <h2 className="h2">I'm a Full Stack Engineer with a passion for building digital products and experiences. I develop, design,
         and implement applications for the web through tech.</h2>
        </div>
        <div className="heroip">
        <AnchorLink href="#projects"  className="btn">Projects</AnchorLink>
        <AnchorLink href="#contact" className="btn-light">Contact</AnchorLink>
        </div>
        <div className="herois">  
        <AnchorLink href="#projects"  className="btn">Projects</AnchorLink>
        <AnchorLink href="#contact" className="btn-light">Contact</AnchorLink>
       </div>
        </div>
        </div>
        </div>
    )
}

export default Heroimg;
