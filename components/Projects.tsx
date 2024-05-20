import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import RPSDemo from "../public/img/projects/RPS-Demo.jpg";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import MazeDemo from "../public/img/projects/Maze-Demo.jpg";
import TowerdefenceDemo from "../public/img/projects/TD-Demo.png";
import FighterDemo from "../public/img/projects/Fighter-Demo.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={RPSDemo.src}
          title="RPS-Demo"
          link="https://rps-zila.netlify.app"
        />
        <ProjectCard
          img={MazeDemo.src}
          title="Maze-Demo"
          link="https://maze-zila.netlify.app"
        />
      
      <ProjectCard
          img={FighterDemo.src}
          title="Fighter-Demo"
          link="https://fighterdemoo.netlify.app"
        />

        <ProjectCard
          img={TowerdefenceDemo.src}
          title="TowerDefence-Demo"
          link="https://towerdefence-demo.netlify.app"
        />
        
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Dynamic Portfolio"
          link=""
        />

        
      </div>
    </div>
  );
};

export default Projects;
