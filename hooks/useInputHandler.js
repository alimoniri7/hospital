import {useState} from 'react';

const useInputHandler = () => {
    const [value , setValue] = useState('')

    const valueHandler = (event) => {
        setValue(event.target.value)     
    }
    

    return [value , valueHandler]
};

export default useInputHandler;