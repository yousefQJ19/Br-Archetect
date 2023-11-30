import Input from "../InputField/input"
import "./contactStyle.scss"

const inputsField=[
        {
            placeHolder:"Name",
            type:"text"
        },
        {
            placeHolder:"Email",
            type:"email"
        },
        {
            placeHolder:"supject",
            type:"text"
        },
        {
            placeHolder:"Comment",
            type:"text"
        }
]

function Contact(){

    return(
        <div id="Contact"
             className="contact">
            <p className="contact__header">Contact</p>
            <p className="contact__greeting">lets get in touch when you finish</p>
            <form className="contact__form">
                {
                    inputsField.map((input,index)=>(
                        <Input  placeHolder={ input.placeHolder}
                                type={input.type} 
                                key={index}/>
                    ))
                }
                <button className="contact__form__submit">SEND MASSAGE</button>
            </form>
        </div>
    )
}
export default Contact;