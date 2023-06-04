import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return(
        <div className="navigation-container">
            <div className="navigation-item-wrapper">
                <div className="navigation-logo">Logo</div>
                <div className="link-container-categories">
                    <Link className="nav-link">Mens</Link>
                    <Link className="nav-link">Womens</Link>
                    <Link className="nav-link">Mens</Link>
                    <Link className="nav-link">Misc</Link>
                </div>
                <div className="utility-icon-container">
                    <Link  className="nav-link">Loved</Link>
                    <Link  className="nav-link">Cart</Link>
                    <Link  className="nav-link" to="auth">Sign In</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;