/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import"./inputStyle.scss"

function Input({type,placeHolder}){

    return(
        <input type={type}
               placeholder={placeHolder}
               className="inputField"
        />
    )
    
}

export default Input;