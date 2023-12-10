import "./style.scss";
import Card from "../cards/projectsCard/projectsCards";
import housesData from "../../Data/ProjectsSectionData"

function Projects() {
    return (
        <div id="Projects" 
             className="projects">
            <p className="projects__header">Projects</p>
            <div className="projects__list">
                {
                housesData.map((data, index) => (
                    <Card {...data}
                          key={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
