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
          desc: "The Math Magicians Calculator is a simple calculator that enables you perform simple calculations. It is built with react and has a Single Page Application that shows information like quotes, etc.",
          img: math,
          tech: ['React', 'CSS'],
          live: 'https://ephemeral-bunny-da5e7e.netlify.app/',
          source: 'https://github.com/ijeomaodinko/Math-magicians.git',
        },
        {
            id: 2,
          title: 'Horror Shows',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project contains codes that enables users get from and add data to the API. It shows information about movie shows. People can browse through, like and comment. The count of likes and count are registed.",
          img: horror,
          tech: ['HTML', 'CSS', 'JavaScript'],
          live: 'https://ijeomaodinko.github.io/CAPSTONE_2/dist/',
          source: 'https://github.com/ijeomaodinko/CAPSTONE_2.git',
        },
        {
            id: 3,
          title: 'To Do App',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project contains codes that enables users add their activities and be able to remove once it is completed.",
          img: todo,
          tech: ['HTML', 'CSS', 'JavaScript'],
          live: 'https://ijeomaodinko.github.io/todo-list-project/dist/',
          source: 'https://github.com/ijeomaodinko/todo-list-project.git',
        },
        {
            id: 4,
          title: 'Budget App',
          subt: ['CANOPY', 'Back End Dev', '2022'],
          desc: "Budget App is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
          img: budget,
          tech: ['Ruby', 'CSS', 'Ruby on Rails'],
          live: 'https://sheltered-shore-56941.herokuapp.com/',
          source: 'https://github.com/ijeomaodinko/Budget-app.git',
        },
    ];
    return (
        <div className="projects" id="projects" >
        <h1 className="projectsi">Most Recent Projects</h1>
        <div className="wrapperp">
        {data.map((projects) => {
            return (<div className="project" key={projects.id}>
                <h1 className="projectsisi">{projects.title}</h1>
                <img class="imgd1" src={projects.img} alt="{projects.title}" />
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
                        < FaExternalLinkAlt size={15} style={{ color: "#000"}} />
                     </span> </p>  </a>
                    </div>
                    <div className="projectsisis">
                     <a href={projects.source}> <p>See Source <span>
                        < FaGithub size={15} style={{ color: "#000"}} />
                    </span></p>
                        </a>
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