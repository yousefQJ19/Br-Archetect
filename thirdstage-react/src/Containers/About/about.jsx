import Card from "../../component/cards/AboutCard/aboutCards"
import "./aboutStyle.scss"
import aboutCards from "../../Data/AboutData";

function About(){
    return(
        <div id = "About" 
             className = "about">
            <p className = "about__header">About</p>
            <div className = "about__list">
                {
                    aboutCards.map((aboutCard,index) => (
                        <Card {...aboutCard}
                              key = {index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default About;
