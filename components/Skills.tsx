import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
      
       
        
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
       
     
        <SkillsInput title="Github" link="https://github.com/" />
       
        <SkillsInput title="Canva" link="https://www.canva.com/" />
       
        <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
      </div>
    </div>
  );
};

export default Skills;
