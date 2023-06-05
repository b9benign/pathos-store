import { auth } from '../../../utils/fire-utils/fire-utils';
import SignInForm from '../../sign-in-form/sign-in-form-component';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import './authentication.styles.scss';


const AuthPage = () => {
    return (
        <>
            <h2>Authentication Page</h2>
            <SignUpForm />
            <SignInForm />

            <span>signed in as: {auth.currentUser?.email}</span>
        </>
    )
    
}

export default AuthPage;