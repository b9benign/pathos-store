import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import './checkout.styles.scss';


const CheckoutPage = () => {

    const {} = useContext(CartContext);
    
    return (
        <div>
            <h1>oidpiwejdpiwejpdjewidjiewjdwjdweoidjwojdowe chekoout</h1>
        </div>
    )
}

export default CheckoutPage;