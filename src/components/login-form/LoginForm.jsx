import React, {useState} from 'react';
import './LoginForm.css';
import Input  from '../email-input/EmailInput';

/**
 * LoginForm
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const LoginForm = (props) => {

    const [email, setEmail] = useState('');

    return (
        <div className="login-form">LoginForm!
            <form action="">
            <label htmlFor="">EMail</label><br/>
                <Input value={email} onChange={setEmail} />
            </form>
        </div>
    );
};

export default LoginForm;