import './sign-up-form.styles.scss';
import {
    createUserAuthWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/fire-utils/fire-utils';
import { useState } from 'react';


const SignUpForm = () => {

    const defaultFormFields = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const emptyFormFields = () => setFormFields(defaultFormFields);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name] : value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            return alert("Passwords don't match");
        }
        try {
            const { user } = await createUserAuthWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            emptyFormFields();
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className="authage-signup-container">
                <h4>Don't have an account? Sign Up.</h4>
                <form onSubmit={handleSubmit}>
                    <div className="authpage-input-wrapper">

                        <input 
                            className="authpage-input"
                            placeholder="name"
                            name="displayName"
                            type="text"
                            onChange={handleChange}
                            value={displayName}
                        />
                        <input 
                            className="authpage-input"
                            placeholder="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={email}
                        />
                        <input 
                            className="authpage-input"
                            placeholder="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={password}
                        />
                        <input 
                            className="authpage-input"
                            placeholder="confirm password"
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            value={confirmPassword}
                        />

                    </div>
                    <button type="submit">Sign Up</button>
                </form>
        </div>
    );
}

export default SignUpForm;