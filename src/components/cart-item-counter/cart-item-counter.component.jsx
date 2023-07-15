import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './cart-item-counter.styles.scss'


const CartItemCounter = () => {

    const { totalCartItems } = useContext(CartContext);

    return (
        <div className="cic-container">
            {totalCartItems}
        </div>
    )
}

export default CartItemCounter;