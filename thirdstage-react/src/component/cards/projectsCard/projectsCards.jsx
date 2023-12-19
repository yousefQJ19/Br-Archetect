/* eslint-disable react/prop-types */
import "./projectsCardStyle.scss"

const Card = ({houseType,imgSource})=>(
    <div className = "projects__list__card">
        <span>
            {houseType}
        </span>
        <img src = {imgSource} 
             alt = {houseType}/>
    </div>
)


export default Card;