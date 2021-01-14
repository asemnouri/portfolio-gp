import React, { useContext } from "react";
// import "../skills/Skills.css";
import Button from "../../components/button/Button";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <div >
      <h1 className="education-heading" style={{ textAlign: "center" }}>Projects</h1>
      {
        projects.map(project => {
          return (
            <div className={isDark ? "dark-mode main" : "main"} id="projects">
              <div className="skills-main-div">
                <Fade left duration={1000}>
                  <div className="skills-image-div1" >
                    <img
                      style={{ borderRadius: "30px" }}
                      alt="Saad Working"
                      src={project.image}
                    ></img>
                  </div>
                </Fade>
                <Fade right duration={1000}>
                  <div className="skills-text-div">
                    <h1
                      className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                    >
                      {project.title}
                    </h1>

                    <div>{project.description}</div>
                    <div className="button-greeting-div">
                      <Button text="github code" href={project.github} />
                      <Button
                        text="Website"
                        newTab={true}
                        href={project.demo}
                      />
                      {project.title ==="Acrux-Hospital"?
                      
                      <Button
                        text="live demo"
                        newTab={true}
                        href="https://www.youtube.com/watch?v=gc1l4wHwoE4"
                      />
                      :
                      <></>
                    }
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}
