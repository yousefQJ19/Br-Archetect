/* eslint-disable no-unused-vars */
import { Field, Form, Formik} from "formik"
import commentSchema from "../../schemas/BaisicSchema/"
import Input from "../InputField/input"
import "./contactStyle.scss"

const inputsField=[
        {
            placeHolder:"Name",
            name:"name",
            type:"text"
        },
        {
            placeHolder:"Email",
            name:"email",
            type:"email"
        },
        {
            placeHolder:"Supject",
            name:"subject",
            type:"text"
        },
        {
            placeHolder:"Comment",
            name:"comment",
            type:"text"
        }
]

function Contact(){
    return(
        <div id="Contact"
             className="contact">
            <p className="contact__header">Contact</p>
            <p className="contact__greeting">lets get in touch when you finish</p>
            <Formik 
                initialValues={{
                name:'',
                email: '',
                subject: '',
                comment:'',
            }}
                validationSchema={commentSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    actions.setStatus("Done")
                }}
                >
                {({ isSubmitting,status}) => (
                    <Form className="contact__form">
                        {
                            inputsField.map((input,index)=>(
                                <Input  placeHolder={ input.placeHolder}
                                    type={input.type}
                                    name={input.name}
                                    key={index}/>
                            ))
                        }
                    <button type="submit" 
                            disabled={isSubmitting}
                            className="contact__form__submit">
                        Submit
                    </button>
                    {status ? (<div>{status}</div>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Contact;