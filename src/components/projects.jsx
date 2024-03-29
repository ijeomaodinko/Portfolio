import React from "react";
import "./projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import budget from "../assets/budget.png";
import math from "../assets/math-magician.png";
import horror from "../assets/horror.png";
import bookstore from "../assets/bookstore.png";
import spacetravelershub from "../assets/spacetravelershub.png";
import ecommerce from "../assets/ecommerce.png";


const Projects = () => {
    const data= [
        {
            id: 1,
          title: 'E-Commerce App',
          subt: ['CANOPY', 'FullStack Dev', '2023'],
          desc: "This app significantly transforms the way buyers and manufacturers interact by providing a seamless and efficient link between them enabling businesses to operate more effectively.",
          img: ecommerce,
          tech: ['React', 'Rails', 'Postgres'],
          live: 'https://easybazaar-app.netlify.app/',
          source: 'https://github.com/ijeomaodinko/e-commerce.git',
        },
        {
            id: 2,
          title: 'Horror Shows',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project contains codes that enable users to get from and add data to the API. It shows information about movie shows. People can browse through, like, and comment.",
          img: horror,
          tech: ['HTML', 'CSS', 'JavaScript'],
          live: 'https://ijeomaodinko.github.io/CAPSTONE_2/dist/',
          source: 'https://github.com/ijeomaodinko/CAPSTONE_2.git',
        },
        {
          id: 3,
        title: 'Math Magicians Calculator',
        subt: ['CANOPY', 'Front End Dev', '2022'],
        desc: "The Math Magicians Calculator is a simple calculator that enables you to perform simple calculations. It is built with react and has a Single Page Application that shows information like quotes.",
        img: math,
        tech: ['React', 'CSS'],
        live: 'https://math-magician-quotes.netlify.app/#/Calculator',
        source: 'https://github.com/ijeomaodinko/Math-magicians.git',
      },
        {
            id: 4,
          title: 'Erypto App',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project gives information about cryptocurrencies. The information was fetched from the API.",
          img: budget,
          tech: ['React', 'Redux', 'CSS'],
          live: 'https://eryptok.netlify.app/',
          source: 'https://github.com/ijeomaodinko/React-Project.git',
        },
        {
            id: 5,
          title: 'Bookstore',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "This project is for online users who want to store an ebook with the details of the books.",
          img: bookstore,
          tech: ['React', 'Redux', 'CSS'],
          live: 'https://bookstoreonlineport.netlify.app/',
          source: 'https://github.com/ijeomaodinko/React-Project.git',
        },
        {
            id: 5,
          title: 'Space Travelers Hub',
          subt: ['CANOPY', 'Front End Dev', '2022'],
          desc: "The real live data from the SpaceX API was used to build a web for company that provides commercial and scientific space travel services. The application allow users to book rockets, dragons and join selected space missions.",
          img: spacetravelershub,
          tech: ['React', 'Redux', 'CSS'],
          live: 'https://space-travellers-hubi.netlify.app/',
          source: 'https://github.com/ijeomaodinko/Space-Travelers-Hub.git',
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
                <div><p className="projectse">{projects.desc}</p></div>
                <div className="projectechi">
                {projects.tech.map((tech, index) => {
                    return (<div  className="projectech" key={index}><p>{tech}</p></div>
                    );
                })}
                </div>
                <div className="projecti">
                <div className="projectsisis">
                     <a href={projects.live} target="_blank"
        rel="noreferrer" > <p> See Live <span>
                        < FaExternalLinkAlt size={15} className="projectise" />
                     </span> </p>  </a>
                    </div>
                    <div className="projectsisis">
                     <a href={projects.source} target="_blank"
        rel="noreferrer"> <p>See Source <span>
                        < FaGithub size={15} className="projectise" />
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
