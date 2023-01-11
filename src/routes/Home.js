import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Projects from "../components/projects";
import Aboutpage from "../components/about";
import Contactpage from "../components/contactme";
import Sidebar from "../components/sidebar";

const Home = () => {
    return (
        <div>
        <Navbar />
        {/* <Sidebar /> */}
        <Heroimg />
        <Projects />
        <Aboutpage />
        <Contactpage />
        </div>
    )
}

export default Home;