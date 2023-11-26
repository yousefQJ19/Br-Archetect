/* eslint-disable react/prop-types */
import "./aboutCardStyle.scss"

function Card({imgSource}){
    return(
        <div className="card">
            <img src={imgSource} 
                 alt="founders"
                 className="card__image" />
            <span className="card__name">john dohe</span>
            <span className="card__position">Ceo & Founder</span>
            <p className="card__description">
                Lorem ipsum dolor sit amet Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. 
            </p>
            <button className="card__button">Contact</button>
        </div>
    )
}
export default Card;