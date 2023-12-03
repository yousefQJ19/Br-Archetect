/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ErrorMessage, Field } from "formik";
import"./inputStyle.scss"

function Input({type,placeHolder,name}){

    return(
        <>
        <Field type={type}
               name={name}
               className="inputField"
               placeholder={placeHolder}/>
        <ErrorMessage name={name} component="div" />
        </>
    )
}

export default Input;