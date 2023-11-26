import "./aboutStyle.scss"
import Card from "../cards/AboutCard/aboutCards"
const array=["7.jpg","8.jpg","9.jpg","7.jpg",]

function About(){
    return(
        <div  id="About" 
              className="about">
            <p className="about__header">About</p>
            <div className="about__list">
                {
                    array.map((img,index)=>(
                        <Card imgSource={img} 
                              key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default About;
