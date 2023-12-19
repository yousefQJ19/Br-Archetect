
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import axios from 'axios';
//INTERNAL COPMPONENT
import Card from "../../component/cards/AboutCard/aboutCards";
//STYLE FILE
import "./aboutStyle.scss";
import image from "/7.jpg"

function About({cardsNumber}){
    const description = "Phasellus eget enim eu lectus raucibus vestibulum. Suspendisse sodales pellentesque elementum";
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

    if(cardsNumber === 4){
        displayData = displayData.slice(0,4)
    }
    else{
        displayData = displayData.slice(0,8)
    }
  
    return(
        <div id = "About" 
             className = "about">
            <p className = "about__header">About</p>
            <div className = "about__list">
                {
                    displayData.map((aboutCard,index) => (
                        <Card name = {aboutCard.name}
                              position = {aboutCard.status}
                              description = {description}
                              imageSource = {image}
                              key = {index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default About;
