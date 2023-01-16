import React from "react";
import "./contactme.css";
import {  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist, FaMailBulk } from "react-icons/fa";

function Contactpage() {
    return (    
          <div class="SectionfText" id="contact">
        <h1 class="frm">Say Hello</h1>
        <p class="center"> If you have an application that you are interested in developing,
          a feature that you need to build or a project that needs 
          coding. I'd love to help with it.</p>
          <div className="contacti">
          <form action="https://formspree.io/f/meqnzbev" target="_blank" method="post" id="contact-form" >
            <ul>
              <li class="form1">
                <input id="Username" type="text" class="username" name="username" maxlength="30"   placeholder="Full Name" required />
              </li>
            <li class="form2">
                <input id="Email" class="email" type="email" name="email"  placeholder="E-mail" required  />
            </li>
            <li class="form3">
              <textarea name="Message" placeholder="Write your message here" class="textarea" maxlength="500"  id="Message" cols="30" rows="10" required></textarea>
            </li>
            </ul>
            <input type="submit" class="form-btn" value="Get In It Touch" />
          </form>
          </div>
          <div className="contactei">
                     <div>
                     <a href="https://twitter.com/pureblog0" target="_blank"
        rel="noreferrer" >
                        < FaTwitter size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ijeoma-odinko/" target="_blank"
        rel="noreferrer" >
                        < FaLinkedin size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                     </a>
                    </div>
                    <div>
                    <a href="https://github.com/ijeomaodinko/" target="_blank"
        rel="noreferrer" >
                        < FaGithub size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                    <a href="https://medium.com/@estherlinei" target="_blank"
        rel="noreferrer" >
                        < FaMedium size={29} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} />
                    </a>
                    </div>
                    <div>
                     <a href="https://angel.co/u/ijeoma-odinko" target="_blank"
        rel="noreferrer" >
                        < FaAngellist size={29} style={{ color: "#ccd6f6"}} />
                        </a>
                    </div>

                </div>
          <div className="contactis">
          {/* <div className="phone">
                    <h4>
                    ©ijeomaodinko. All Rights Reserved</h4> </div> */}
                    <div className="mail">
                    <h4>< FaMailBulk size={20} style={{ color: "rgb(173, 164, 164)", marginRight:"0.5rem"}} />
                   ijeomaodinko@gmail.com</h4>
                    </div>
          </div>
          </div>
        )
    };
    
    export default Contactpage;
