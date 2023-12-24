/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Pagination } from '@mui/material';
import { useFetchData } from './useFetchData';
//importing about page card
import Card from '../../component/cards/AboutCard/aboutCards';
//including style
import './aboutStyle.scss';
//importing the photo 
import image from '/7.jpg';

const DESCRIPTION = "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum";

function About({ cardsInPage }) {   
    
    const [page, setPage] = useState(1);
    const { data: cardData, error } = useFetchData(`https://gorest.co.in/public-api/users?page=${page}&&per_page=${cardsInPage}`);
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    const paginationLength = cardData.meta?.pagination?.pages ;
    const displayData = cardData.data || [];
    
    if (error) {
        return <p>Error loading data</p>;
    }

    return (
        <div id="About" className="about">
            <p className="about__header">About</p>
            <div className="about__list">
                {displayData.map((aboutCard, index) => (
                    <Card
                        description={DESCRIPTION}
                        name={aboutCard.name}
                        position={aboutCard.status}
                        imageSource={image}
                        key={index}
                    />
                ))}
            
            </div>
            {cardsInPage !== 4 &&
                    <div className='about__pagination'>
                        <Pagination count={paginationLength} 
                                    page={page} 
                                    onChange={handleChange} />
                    </div>
            }
        </div>
    );
}
export default About;
