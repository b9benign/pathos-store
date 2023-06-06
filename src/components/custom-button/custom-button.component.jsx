import './custom-button.styles.scss';


const BUTTON_TYPES = {
    light:'light-button',
    dark:'dark-button',
    google:'google-button',
}

const CustomButton = ({children, buttonType, ...otherProps}) => {

    return (
        <button {...otherProps} className={`custom-button-container ${BUTTON_TYPES[buttonType]}`}> 
            {children}
        </button>
    );
}

export default CustomButton;