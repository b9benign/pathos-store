import './form-input.styles.scss';


const FormInput = ({label, ...otherProps}) => {
    
    return (
        <div className="form-input-container">
            <input {...otherProps} className="form-input"/>
            <label className={`${otherProps.value.length ? 'resize' : ''} form-input-label`}>
                {label}
            </label>
            
        </div>
    );
}

export default FormInput;