import React from 'react';
import './PassInput.css';

/**
 * PassInput
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string} props.value
 * @param {function} props.onChange 
 */
const PassInput = (props) => {
    const {value, onChange } = props;
    const handlerOnChange = (event) => {
            const {value} = event.target;
            onChange(value);
    };
    return (
        <div className="pass-input">
             <input 
                type="password" 
                value={value} 
                onChange={handlerOnChange} 
            />
        </div>
    );
};

export default PassInput;