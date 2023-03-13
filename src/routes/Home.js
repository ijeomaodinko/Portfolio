import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Projects from "../components/projects";
import Aboutpage from "../components/about";
import Skillspage from "../components/skills";
import Contactpage from "../components/contactme";
import useLocalStorage from 'use-local-storage';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Home = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark': 'light');
   const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
   }
    return (
        <div className='app' data-theme={theme}>
        <Navbar />
        {/* {setTheme ? (
        ) : (
         <div className="toggleoff"><FaToggleOff onClick={switchTheme} size={29.9} style={{ color: "#000", marginRight:"1.9rem"}} /></div>
        )}  */}
            <div className="toggle"><FaToggleOn onClick={switchTheme} size={29.9} style={{ color: "#ccd6f6", marginRight:"1.9rem"}} /></div>
        <Heroimg />
        <Aboutpage />
        <Skillspage />
        <Projects />
        <Contactpage /> 
        </div>
    )
}

export default Home;