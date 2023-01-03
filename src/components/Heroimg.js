import React from "react";
import imgi from "../assets/imgi.jpg";
import "./Heroimg.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Heroimg() {
    return (
        <div className="hero" style={{backgroundImage:'url('+imgi+')', backgroundSize:"cover"}} id="home">
        <div>
        <div className="content">
        <div className="heroi">
        <h1>I'M  IJEOMA ODINKO.</h1>
        <AnchorLink href="#projects"  className="btn">Projects</AnchorLink>
        </div>
        <div className="heroi">
        <p>I’M A SOFTWARE DEVELOPER!</p>
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