import React, {useState} from "react";

//Reusable component that receives an input type and determines what type of input element to render (email, text, etc)
export default function FormInput(props) {
    const [inputType] = useState(props.type);
    const [inputPlaceHolder] = useState(props.placeholder);
    const [inputValue, setInputValue] = useState('');

    //checks if the state of data is available/changed and sends the updated data as output
    function handleChange(evt){
        setInputValue(evt.target.value);
        //updates the input element locally when called

        if(props.onChange)
            props.onChange(inputValue)
    }

    return (
        <>
            <input 
                type={inputType} 
                value={inputValue} 
                name="input-form" 
                onChange={handleChange} 
                className="input-form"
                placeholder={inputPlaceHolder}
            />
        </>
    )
}
