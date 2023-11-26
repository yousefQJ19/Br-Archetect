import Input from "../InputField/input"
import "./contactStyle.scss"
const PlaceHolders=["Name","Email","Subject","Comment"]

function Contact(){

    return(
        <div id="Contact"
             className="contact">
            <p className="contact__header" >Contact</p>
            <p className="contact__greeting">lets get in touch when you finish</p>
            <form className="contact__form">
                {
                    PlaceHolders.map((placeHolder,index)=>(
                        <Input  placeHolder={ placeHolder} 
                                key={index}/>
                    ))
                }
            </form>
            <button className="contact__submit">SEND MASSAGE</button>
        </div>
    )
}
export default Contact;