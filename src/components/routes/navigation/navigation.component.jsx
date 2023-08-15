import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../context/user-context';
import { CartContext } from '../../../context/cart-context';
import { LovedItemContext } from '../../../context/loved-context';
import { logUserOut, auth } from '../../../utils/fire-utils';
import CartItemCounter from '../../cart-item-counter/cart-item-counter.component';

import { ReactComponent as LovedIcon } from '../../../assets/vector-graphics/heart-icon.svg';
import { ReactComponent as LoginIcon } from '../../../assets/vector-graphics/login-icon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/vector-graphics/logout-icon.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/vector-graphics/shopping-cart-icon.svg';
import { ReactComponent as PathosLogo } from '../../../assets/vector-graphics/pathos-logo.svg';
import { ReactComponent as HomeIcon } from '../../../assets/vector-graphics/home-icon.svg';

import './navigation.styles.scss';



const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const logOutHandler = () => {
        logUserOut(auth);
        window.location.reload();
    }
    const { toggleCartVisibility, isCartOpen, cartItems } = useContext(CartContext);
    const { fetchLovedList } = useContext(LovedItemContext);

    const handleLovedIconClick = () => {
        fetchLovedList();
    }

    return (
        <div className="navigation-container">
            <div className="navigation-items-wrapper">
                <div>
                    <Link to="/store" className="nav-category-link">Store</Link>
                    <Link to="https://github.com/b9benign/pathos-store" target="_blank" className="nav-category-link">About</Link>
                </div>

                <div className="link-container-categories">
                    <Link className="nav-link pathos-logo" to="/">
                        <PathosLogo className="pathos-logo" />
                    </Link>
                </div>

                <div className="utility-icon-container">
                    <Link className="nav-utility-icon-wrapper" to="/">
                        <HomeIcon className="nav-home-icon" />
                    </Link>
                    <Link className="nav-utility-icon-wrapper" to="/loved" onClick={handleLovedIconClick}>
                        <LovedIcon className="nav-utility-icon" />
                    </Link>
                    <Link className="nav-utility-icon-wrapper" onClick={toggleCartVisibility}>
                        {cartItems.length > 0 && <CartItemCounter />}
                        <ShoppingCartIcon className={`nav-utility-icon ${isCartOpen ? 'cart-active' : ''}`} />
                    </Link>

                    {currentUser
                        ? <LogoutIcon className="nav-logout-button" onClick={logOutHandler} />
                        : (
                            <Link className="nav-utility-icon-wrapper" to="auth">
                                <LoginIcon className="nav-login-button" />
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;