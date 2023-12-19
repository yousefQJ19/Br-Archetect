/* eslint-disable react/prop-types */
import "./aboutCardStyle.scss"

const  Card = ({name,position,description,imageSource}) => (
    <div className = "card">
        <img src = {imageSource} 
             alt = "founders"
             className = "card__image" />
        <span className = "card__name">
            {name}
        </span>
        <span className = "card__position">
            {position}
        </span>
        <p className = "card__description">
            {description}
        </p>
        <button className = "card__button">
            Contact
        </button>
    </div>
)

export default Card;