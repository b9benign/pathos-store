import './sign-in-form.styles.scss';


const SignInForm = () => {
    return (
        <div className="authpage-signin-container">
            <h4>Already have an account? Sign in.</h4>
            <form>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default SignInForm;