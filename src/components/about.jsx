import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist } from "react-icons/fa";
import "./about.css";

function Aboutpage() {
    return (
          <div className="aboutContent" id="about">
            <div className="wrapper">
              <div className="aboutpage"> 
                <div className="aboutme">
                <h1 className="h1"> About Myself</h1>
                <p className="p">  Hello, I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hestiate to contact me.</p>
            <p class="let-connect">
            LET'S CONNECT
          </p>
                </div>
                <div className="contact">
                     <div>
                     <a href="https://twitter.com/pureblog09">
                        < FaTwitter size={29} style={{ color: "#000", marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/">
                        < FaLinkedin size={29} style={{ color: "#000", marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/">
                        < FaGithub size={29} style={{ color: "#000", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei">
                        < FaMedium size={29} style={{ color: "#000", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                     <a href="https://www.linkedin.com/in/ijeoma-odinko/">
                        < FaAngellist size={29} style={{ color: "#000"}} />
                        </a>
                    </div>

                </div>

                <div className="resume">
                <a href="https://docs.google.com/document/d/1NJyon1GKzHx4COIBLH6vuco-nFt-Vm1aXktGAcrbdMw/edit?usp=sharing">
                Get My Resume </a></div>
            </div>


            <div className="languages">
            <h1 className="i"> Skills </h1>
            <div className="language">
             <div class="box a">HTML</div>
             <div class="box b">CSS</div>
            <div class="box c">JavaScript</div>
            <div class="box d">React</div>
            <div class="box e">Ruby</div>
            <div class="box f">Ruby on Rails</div>
            <div class="box g">Redux</div>
            <div class="box h">Netlify</div>
            <div class="box i">Webpack</div>
            </div>

            </div>

            </div>
        </div>
    )
}

export default Aboutpage;