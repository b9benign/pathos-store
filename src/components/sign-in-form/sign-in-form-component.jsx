import { createGoogleUserDoc, signInUserAuthWithEmailAndPassword } from '../../utils/fire-utils/fire-utils';
import { signInWithGooglePopup } from '../../utils/fire-utils/fire-utils';
import './sign-in-form.styles.scss';
import { useState } from 'react';


const SignInForm = () => {
    
    const defaultFormFields = { email:'', password:''};
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name] : value})
    }

    const handleGoogleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createGoogleUserDoc(user);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signInUserAuthWithEmailAndPassword(email, password);
    }


    return (
        <div className="authpage-signin-container">
            <h4>Already have an account? Sign in.</h4>
            <form onSubmit={handleSubmit}>

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

                <button type="submit">Log in</button>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;