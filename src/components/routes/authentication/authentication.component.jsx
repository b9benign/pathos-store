import SignInForm from '../../auth-forms/sign-in-form/sign-in-form-component';
import SignUpForm from '../../auth-forms/sign-up-form/sign-up-form.component';

import './authentication.styles.scss';

const AuthPage = () => {
    return (
        <>
            <div className="authpage-container">
                <SignInForm />
                <SignUpForm /> 
            </div>
              
        </>
    )
    
}

export default AuthPage;