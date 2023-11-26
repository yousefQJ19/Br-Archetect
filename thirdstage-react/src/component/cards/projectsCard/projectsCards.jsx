/* eslint-disable react/prop-types */

import "./projectsCardStyle.scss"



function Card({imgSource}){
        return(
            <div className="projects__list__card">
                <span>summer house</span>
                <img src={imgSource} 
                     alt="summer house" />
            </div>
        )
}

export default Card;