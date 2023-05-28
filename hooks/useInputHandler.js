import {useState} from 'react';

const useInputHandler = (defaultValue= '') => {
    const [value , setValue] = useState(defaultValue)

    const valueHandler = (event) => {
        setValue(event.target.value)     
    }
    

    return [value , valueHandler]
};

export default useInputHandler;