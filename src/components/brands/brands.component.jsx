import './brands.styles.scss';
import { Link } from 'react-router-dom';


const Brands = () => {
    return (
        <div className="affiliate-brands-container">
            <Link className="brand-link" to="https://www.nike.com/" target="_blank">
                <img 
                    src={require('../../assets/brands/nike_logo.png')}
                    alt="nike logo"
                    id="nike-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
            <Link className="brand-link" to="https://www.adidas.com/" target="_blank">
                <img 
                    src={require('../../assets/brands/adidas_logo.png')}
                    alt="adidas logo"
                    id="adidas-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
            <Link className="brand-link" to="https://jordanoffical.eu.com/" target="_blank">
                <img 
                    src={require('../../assets/brands/jordan_logo.png')}
                    alt="jordan logo"
                    id="jordan-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
            <Link className="brand-link" to="https://www.vans.com/" target="_blank">
                <img 
                    src={require('../../assets/brands/vans_logo.jpg')}
                    alt="vans logo"
                    id="vans-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
            <Link className="brand-link" to="https://www.on-running.com/" target="_blank">
                <img 
                    src={require('../../assets/brands/on_logo.png')}
                    alt="on logo"
                    id="on-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
            <Link className="brand-link" to="https://www.newbalance.com" target="_blank">
                <img 
                    src={require('../../assets/brands/newbalance_logo.png')}
                    alt="new balance logo"
                    id="newbalance-logo"
                    className="affiliate-brand-logo"
                />
            </Link>
        </div>
    )
}

export default Brands;