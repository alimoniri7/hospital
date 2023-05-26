import { useState } from "react";

const useValidation = (value , regex) =>{
    const [validate , setValidate] = useState({isValid: false, message: ''})

    let checking = (message)=> {
        if(value){
            if (value.match(regex)) {
                setValidate({isValid: true, message: ''})
            }else{
                setValidate({
                    isValid: false, message: message
                })
            }           
        }else {
            setValidate({
                isValid: false, message: 'invalid entry'
            })
        }
    }

    return [validate , checking]
}

export default useValidation;