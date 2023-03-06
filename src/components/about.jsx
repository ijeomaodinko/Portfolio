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
                     <div className="contactdiv">
                     <a href="https://twitter.com/pureblog0" target="_blank"
        rel="noreferrer" >
                        < FaTwitter size={24} className="img" style={{ margin:"9px" }} />
                        </a>
                    </div>
                    <div className="contactdiv">
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/"  target="_blank"
        rel="noreferrer" >
                        < FaLinkedin size={29} className="img" style={{ margin:"9px" }} />
                     </a>
                    </div>
                    <div className="contactdiv">
                    <a href="https://github.com/ijeomaodinko/" target="_blank"
        rel="noreferrer"  >
                        < FaGithub size={29} className="img" style={{ margin:"9px" }} />
                    </a>
                    </div>
                    <div className="contactdiv">
                    <a href="https://medium.com/@estherlinei" target="_blank"
        rel="noreferrer"  >
                        < FaMedium size={29} className="img" style={{ margin:"9px" }} />
                    </a>
                    </div>
                    <div className="contactdiv">
                     <a href="https://angel.co/u/ijeoma-odinko"  target="_blank"
        rel="noreferrer" >
                        < FaAngellist size={29} className="img" style={{ margin:"9px"}} />
                        </a>
                    </div>

                </div>

                <div className="contacte">
                     <div>
                     <a href="https://twitter.com/pureblog0" target="_blank"
        rel="noreferrer" >
                        < FaTwitter size={29} className="imge" style={{ marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/" target="_blank"
        rel="noreferrer" >
                        < FaLinkedin size={29} className="imge" style={{ marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/" target="_blank"
        rel="noreferrer" >
                        < FaGithub size={29} className="imge" style={{ marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei"  target="_blank"
        rel="noreferrer" >
                        < FaMedium size={29} className="imge" style={{ marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div> 
                     <a href="https://angel.co/u/ijeoma-odinko" target="_blank"
        rel="noreferrer" >
                        < FaAngellist size={29} className="imge" />
                        </a>
                    </div>

                </div>

                <div className="resume">
                <a href="https://drive.google.com/file/d/1p0MsdE1aLPb6er4fy-3XeW23N5FVcGK3/view?usp=sharing"  target="_blank"
        rel="noreferrer" >
                Get My Resume </a></div>
            </div>

            <div className="imgie"></div>
            </div>
        </div>
    )
}

export default Aboutpage;
