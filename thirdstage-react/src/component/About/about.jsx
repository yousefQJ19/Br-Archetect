/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"
import axios from 'axios';
import Card from "../cards/AboutCard/aboutCards"
import "./aboutStyle.scss"

const description="Phasellus eget enim eu lectus raucibus vestibulum. Suspendisse sodales pellentesque elementum"

function About({cardsNumber}){
    const [cardData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://gorest.co.in/public-api/users');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchData();
}, []);

    let displayData=cardData.data || []
    if(cardsNumber=== 4){
        displayData=displayData.slice(0,4)
    }
    console.log(displayData)
    return(
        <div id="About" 
             className="about">
            <p className="about__header">About</p>
            <div className="about__list">
                {
                    displayData.map((aboutCard,index)=>(
                        <Card name={aboutCard.name}
                              position={aboutCard.status}
                              description={description}
                              imageSource={"8.jpg"}
                              key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default About;
