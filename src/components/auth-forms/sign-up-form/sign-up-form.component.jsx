import {
    createUserAuthWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../../utils/fire-utils';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import '../auth-forms.styles.scss';

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
            window.location.reload(); 
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className="authpage-form-container">
            <h2 className="authpage-form-title">Don't have an account yet?</h2>
            <span className="authpage-form-subtitle">Sign up below.</span>

                <form onSubmit={handleSubmit}>

                        <FormInput 
                            className="authpage-input"
                            label="Display Name"
                            name="displayName"
                            type="text"
                            onChange={handleChange}
                            value={displayName}
                            required 
                        />
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
                        <FormInput 
                            className="authpage-input"
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            value={confirmPassword}
                            required 
                        />

                    <CustomButton type="submit" buttonType="dark">Sign Up</CustomButton>
                </form>
        </div>
    );
}

export default SignUpForm;