import Card from "../cards/AboutCard/aboutCards"
import "./aboutStyle.scss"

const description="Phasellus eget enim eu lectus raucibus vestibulum. Suspendisse sodales pellentesque elementum"
const aboutCards=[
    {
    name:"John Doe",
    position:"CEO & Founder",
    description:description,
    imageSource:"7.jpg"
    },
    {
    name:"Jane Doe",
    position:"Architect",
    description:description,
    imageSource:"8.jpg"
    },
    {
    name:"Mike Ross",
    position:"Architect",
    description:description,
    imageSource:"9.jpg"
    },
    {
    name:"Dan Star",
    position:"Architect",
    description:description,
    imageSource:"7.jpg"
    }]
function About(){
    return(
        <div id="About" 
             className="about">
            <p className="about__header">About</p>
            <div className="about__list">
                {
                    aboutCards.map((aboutCard,index)=>(
                        <Card {...aboutCard}
                              key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default About;
