import "./style.scss";
import Card from "../cards/projectsCard/projectsCards";

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

function Projects() {
    return (
        <div id="Projects" 
             className="projects">
            <p className="projects__header">Projects</p>
            <div className="projects__list">
                {images.map((img, index) => (
                    <Card   imgSource={img} 
                            key={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
