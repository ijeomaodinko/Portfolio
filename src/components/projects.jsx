import React from "react";
import "./projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import budget from "../assets/budget.png";
import math from "../assets/math-magician.png";
import todo from "../assets/todo.png";
import horror from "../assets/horror.png";

const Projects = () => {
    const data= [
        {
            id: 1,
          title: 'Math Magicians Calculator',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "The Math Magicians Calculator is a simple calculator that enables you to perform simple calculations. It is built with react and has a Single Page Application that shows information like quotes.",
          img: math,
          tech: ['React', 'CSS'],
          live: 'https://ephemeral-bunny-da5e7e.netlify.app/',
          source: 'https://github.com/ijeomaodinko/Math-magicians.git',
        },
        {
            id: 2,
          title: 'Horror Shows',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project contains codes that enable users to get from and add data to the API. It shows information about movie shows. People can browse through, like, and comment. The count of likes and count are registered.",
          img: horror,
          tech: ['HTML', 'CSS', 'JavaScript'],
          live: 'https://ijeomaodinko.github.io/CAPSTONE_2/dist/',
          source: 'https://github.com/ijeomaodinko/CAPSTONE_2.git',
        },
        {
            id: 3,
          title: 'To Do App',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project contains codes that enable users to add their activities and be able to remove them once it is complete.",
          img: todo,
          tech: ['HTML', 'CSS', 'JavaScript'],
          live: 'https://ijeomaodinko.github.io/todo-list-project/dist/',
          source: 'https://github.com/ijeomaodinko/todo-list-project.git',
        },
        {
            id: 4,
          title: 'Erypto App',
          subt: ['CANOPY', 'Back End Dev', '2022'],
          desc: "This project gives information about cryptocurrencies. The information was fetched from the API.",
          img: budget,
          tech: ['React', 'Redux', 'CSS'],
          live: 'https://timely-medovik-20a0c5.netlify.app',
          source: 'https://github.com/ijeomaodinko/React-Project.git',
        },
    ];
    return (
        <div className="projects" id="projects" >
        <h1 className="projectsi">Projects</h1>
        <div className="wrapperp">
        {data.map((projects) => {
            return (<div className="project" key={projects.id}>
            <div className="imgi">
                <h1 className="projectsisi">{projects.title}</h1>
                <div className="projectimgd1">
                <img className="imgd1" src={projects.img} alt="{projects.title}" />
                </div>  
            </div>
            <div className="texti">
            {/* <h1 className="projectsesi">{projects.id}</h1> */}
                <div><p className="projectse">{projects.desc}</p></div>
                <div className="projectechi">
                {projects.tech.map((tech, index) => {
                    return (<div  className="projectech" key={index}><p>{tech}</p></div>
                    );
                })}
                </div>
                <div className="projecti">
                <div className="projectsisis">
                     <a href={projects.live}> <p> See Live <span>
                        < FaExternalLinkAlt size={15} style={{ color: "#ccd6f6"}} />
                     </span> </p>  </a>
                    </div>
                    <div className="projectsisis">
                     <a href={projects.source}> <p>See Source <span>
                        < FaGithub size={15} style={{ color: "#ccd6f6"}} />
                    </span></p>
                        </a>
                    </div>
               </div>
               </div>
            </div>
            );
        })}
        </div>
        </div>
    )
}

export default Projects;