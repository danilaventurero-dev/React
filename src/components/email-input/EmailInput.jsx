import React from 'react';
import './EmailInput.css';

/**
 * EmailInput
 * @version v1.0.0
 * 
 * @param {*} props
 * @param {string} props.value
 * @param {function} props.onChange 
 */
const EmailInput = (props) => {
    const {value, onChange } = props;
    const handlerOnChange = (event) => {
            const {value} = event.target;
            onChange(value);
    };

    return (
        <div className="email-input">
            <input 
                type="text" 
                value={value} 
                onChange={handlerOnChange} 
            />
        </div>
    );
};

export default EmailInput;