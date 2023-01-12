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
                <p className="p">  Hello, I’m a full stack developer specializing in building things for the web.<br />
                I am highly proficient in HTML, CSS, React, and Ruby on Rails but I also work with JavaScript. I am currently working on improving my skills in Rspec. I am passionate about responsive designs, getting websites to look good across different platforms and devices, whether is mobile first or desktop first approach. <br />
                Listed are technologies that I have been working with recently and some of my skills.
                </p>
            <p class="let-connect">
            LET'S CONNECT
          </p>
                </div>
                <div className="contact">
                     <div>
                     <a href="https://twitter.com/pureblog0">
                        < FaTwitter size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/">
                        < FaLinkedin size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/">
                        < FaGithub size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei">
                        < FaMedium size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                     <a href="https://angel.co/u/ijeoma-odinko">
                        < FaAngellist size={29} style={{ color: "#ccd6f6"}} />
                        </a>
                    </div>

                </div>

                <div className="contact">
                     <div>
                     <a href="https://twitter.com/pureblog0">
                        < FaTwitter size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/">
                        < FaLinkedin size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/">
                        < FaGithub size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei">
                        < FaMedium size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                     <a href="https://angel.co/u/ijeoma-odinko">
                        < FaAngellist size={29} style={{ color: "#ccd6f6"}} />
                        </a>
                    </div>

                </div>

                <div className="contacte">
                     <div>
                     <a href="https://twitter.com/pureblog0">
                        < FaTwitter size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/">
                        < FaLinkedin size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/">
                        < FaGithub size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei">
                        < FaMedium size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                     <a href="https://angel.co/u/ijeoma-odinko">
                        < FaAngellist size={29} style={{ color: "#ccd6f6"}} />
                        </a>
                    </div>

                </div>

                <div className="resume">
                <a href="https://docs.google.com/document/d/1NJyon1GKzHx4COIBLH6vuco-nFt-Vm1aXktGAcrbdMw/edit?usp=sharing">
                Get My Resume </a></div>
            </div>


            <div className="languages">
            <h1 className="i"> Technologies </h1>
            <div className="language">
             <div class="box a">HTML</div>
             <div class="box b">CSS</div>
            <div class="box c">JavaScript</div>
            <div class="box d">React</div>
            <div class="box e">Ruby</div>
            <div class="box f">Ruby on Rails</div>
            <div class="box g">Redux</div>
            <div class="box h">Rspec</div>
            <div class="box i">PostgreSQL</div>
            </div>
            <h1 className="i"> Skills </h1>
            <div className="language">
             <div class="box a">Result Oriented</div>
             <div class="box b">Team Player</div>
            <div class="box c"> Time Management</div>
            <div class="box d">Communication</div>
            <div class="box e">Remote</div>
            <div class="box f">Creative Thinking</div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Aboutpage;
