import React from "react";
import brewHops from "../../assets/images/Brew-Hops.jpg";
import planetExpress from "../../assets/images/resource-library.png";
import firstPortfolio from "../../assets/images/portfolio1.png";

const Portfolio = (props) => {
  const projectsArr = [
    {
      name: "brew hops",
      description: "first project",
      src: brewHops,
    },
    {
      name: "planet express.js",
      description: "second project",
      src: planetExpress,
    },
    {
      name: "planet express.js",
      description: "Portfolio with HTML5 and CSS",
      src: firstPortfolio,
    }
  ];

  return (
    <div className="">
      <h1>
        Projects
      </h1>
     
        {projectsArr.map((project,i) => (
        <div key={i} className="row vw">  
          <div className=" ">
        
            <div className="card ">
                <img src={project.src} />
              <div className="card-header">
                {project.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description} .</p>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Portfolio;
