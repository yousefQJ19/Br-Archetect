/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import"./inputStyle.scss"

function Input({placeHolder}){

    return(
        <input type="text" 
               placeholder={placeHolder}
               className="inputField"
               />
    )
    
}
export default Input;