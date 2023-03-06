import React from "react";
import "./skills.css";
import { FaCaretRight } from "react-icons/fa";


function Skillspage () {

    return (
        <div className="languagediv">
        <div className="languages">
        <div className="i"><h1 className="i"> Technologies </h1>
        <div className="language">
         <div className="box a"><FaCaretRight size={19} style={{ color: "#000"}}/>HTML</div>
         <div className="box b"><FaCaretRight size={19} style={{ color: "#000"}}/>CSS</div>
        <div className="box c"><FaCaretRight size={19} style={{ color: "#000"}}/>JavaScript</div>
        <div className="box d"><FaCaretRight size={19} style={{ color: "#000"}}/>React.js</div>
        <div className="box e"><FaCaretRight size={19} style={{ color: "#000"}}/>Ruby</div>
        <div className="box f"><FaCaretRight size={19} style={{ color: "#000"}}/>Ruby on Rails</div>
        <div className="box g"><FaCaretRight size={19} style={{ color: "#000"}}/>Redux</div>
        <div className="box h"><FaCaretRight size={19} style={{ color: "#000"}}/>Rspec</div>
        <div className="box g"><FaCaretRight size={19} style={{ color: "#000"}}/>PostgreSQL</div>
        <div className="box g"><FaCaretRight size={19} style={{ color: "#000"}}/>MYSQL</div>
        <div className="box h"><FaCaretRight size={19} style={{ color: "#000"}}/>Jest</div>
        <div className="box g"><FaCaretRight size={19} style={{ color: "#000"}}/>Tailwind CSS</div>
        </div>
        </div>
        </div>
        <div className="skilldiv">
        <div className="i"><h1 className="i"> Skills </h1>
        <div className="languageskill">
         <div class="boxi a"><FaCaretRight size={19} style={{ color: "#000"}}/>Result Oriented</div>
         <div class="boxi b"><FaCaretRight size={19} style={{ color: "#000"}}/>Team Player</div>
        <div class="boxi c"><FaCaretRight size={19} style={{ color: "#000"}}/>Time Management</div>
        <div class="boxi d"><FaCaretRight size={19} style={{ color: "#000"}}/>Communication</div>
        <div class="boxi e"><FaCaretRight size={19} style={{ color: "#000"}}/>Pair Programming</div>
        <div class="boxi f"><FaCaretRight size={19} style={{ color: "#000"}}/>Creative Thinking</div>
        <div class="boxi f"><FaCaretRight size={19} style={{ color: "#000"}}/>Problem Solving</div>
        <div class="boxi f"><FaCaretRight size={19} style={{ color: "#000"}}/>Remote</div>
        <div class="boxi f"><FaCaretRight size={19} style={{ color: "#000"}}/>Collaboration</div>
        <div class="boxi f"></div>
        </div>
        </div>
        </div>
        </div>
    )
}


export default Skillspage