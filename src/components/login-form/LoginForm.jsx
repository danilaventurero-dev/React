import React, {useState} from 'react';
import './LoginForm.css';
import InputEmail  from '../email-input/EmailInput';
import InputPass  from '../pass-input/PassInput';

/**
 * LoginForm
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="login-form">LoginForm!
            <form action=""><br/>
            <label htmlFor="">Email</label><br/>
                <InputEmail value={email} onChange={setEmail} />
                
            <label htmlFor="">Pass</label><br/>
                <InputPass value={pass} onChange={setPass} />
            </form>
        </div>
    );
};

export default LoginForm;