import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as LovedIcon } from '../../../assets/vector-graphics/heart-icon.svg';
import { ReactComponent as LoginIcon } from '../../../assets/vector-graphics/login-icon.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/vector-graphics/shopping-cart-icon.svg';
import { ReactComponent as PathosLogo } from '../../../assets/vector-graphics/pathos-logo.svg';

const Navigation = () => {
    return(
        <div className="navigation-container">
            <div className="navigation-items-wrapper">
                <div>
                    <Link to="/store" className="nav-category-link">Store</Link>
                    <Link to="/about" className="nav-category-link">About</Link>
                </div>

                <div className="link-container-categories">
                    <Link className="nav-link pathos-logo" to="/">
                        <PathosLogo className="pathos-logo"/>
                    </Link>
                </div>

                <div className="utility-icon-container">
                    <Link  className="nav-utility-icon-wrapper">
                        <LovedIcon  className="nav-utility-icon"/>
                    </Link>
                    <Link  className="nav-utility-icon-wrapper">
                        <ShoppingCartIcon  className="nav-utility-icon"/>
                    </Link>
                    <Link  className="nav-utility-icon-wrapper" to="auth">
                        <LoginIcon  className="nav-utility-icon"/>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;