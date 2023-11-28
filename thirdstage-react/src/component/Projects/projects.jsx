import "./style.scss";
import Card from "../cards/projectsCard/projectsCards";

const housesData = [
    {houseType:"Summer house",imgSource:"1.jpg"},
    {houseType:"Bric House",imgSource:"2.jpg"},
    {houseType:"Renovated",imgSource:"3.jpg"},
    {houseType:"Barn House",imgSource:"4.jpg"},
    {houseType:"Summer house",imgSource:"2.jpg"},
    {houseType:"Bric House",imgSource:"1.jpg"},
    {houseType:"Renovated",imgSource:"3.jpg"},
    {houseType:"Barn House",imgSource:"4.jpg"},
];

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
