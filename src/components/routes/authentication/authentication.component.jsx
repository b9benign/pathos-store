import { signInUserAuthWithEmailAndPassword } from '../../../utils/fire-utils';
import SignInForm from '../../auth-forms/sign-in-form/sign-in-form-component';
import SignUpForm from '../../auth-forms/sign-up-form/sign-up-form.component';
import { useContext } from 'react';
import { UserContext } from '../../../context/user-context';

import './authentication.styles.scss';

const AuthPage = () => {

    const { currentUser } = useContext(UserContext);

    const handleClick = async () => {
        await signInUserAuthWithEmailAndPassword(process.env.REACT_APP_DEMO_ADDRESS, process.env.REACT_APP_DEMO_AUTH);
    }
    return (
        <>
            {!currentUser &&
                <div className="authpage-welcome-banner">
                    <span className="authpage-welcome-text">Feel free to sign in with the <span onClick={handleClick} className="auth-demo-login">demo account</span></span>
                </div>
            }
            <div className="authpage-container">
                <SignInForm />
                <SignUpForm />
            </div>
        </>
    )

}

export default AuthPage;