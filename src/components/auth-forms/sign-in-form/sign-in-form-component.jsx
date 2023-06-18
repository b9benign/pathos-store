import { createGoogleUserDoc, signInUserAuthWithEmailAndPassword, signInWithGooglePopup } from '../../../utils/fire-utils';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import { ReactComponent as GoogleFilled } from '../../../assets/vector-graphics/google-filled.svg'

import '../auth-forms.styles.scss';

const SignInForm = () => {
    
    const defaultFormFields = { email:'', password:''};
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const emptyFormFields = () => setFormFields(defaultFormFields);
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
        emptyFormFields();
    }


    return (
        <div className="authpage-form-container">
            <h2 className="authpage-form-title">Already have an account?</h2>
            <span className="authpage-form-subtitle">Sign in with your email or Google.</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    className="authpage-input"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    required 
                />

                <FormInput 
                    className="authpage-input"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                    required 
                />
                <div className="authpage-login-button-spacer">
                    <CustomButton type="submit" buttonType='light'>Log in</CustomButton>
                    <CustomButton onClick={handleGoogleSignIn} buttonType='google'>
                        <GoogleFilled className="google-icon-filled"/>
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;