import {ReactComponent as LovedIcon} from '../../assets/vector-graphics/heart-icon.svg';
import {ReactComponent as LovedIconFilled} from '../../assets/vector-graphics/heart-icon-filled.svg';
import { ReactComponent as CartIcon } from '../../assets/vector-graphics/shopping-cart-icon.svg';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import { LovedItemContext } from '../../context/loved-context';
import { UserContext } from '../../context/user-context';

import './product-modal-table.styles.scss';


const ProductModalTable = ({ item }) => {

    const shoeSizes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
    const id = item.id

    const { addItemToCart } = useContext(CartContext);
    const { lovedIdList, toggleIsItemLoved, fetchLovedIdsList} = useContext(LovedItemContext);
    const {currentUser} = useContext(UserContext);

    const [shoeSize, setShoeSize] = useState();
    const [currentlyLoved, setCurrentlyLoved] = useState(lovedIdList.includes(id));

    const sizeHandler = (e) => {
        const { value } = e.target;
        setShoeSize(value);
    }

    const toggleLovedHandler = async () => { //bug: when store-page is refreshed, hearted items won't be displayed as such
        toggleIsItemLoved(item);
        await fetchLovedIdsList();
        if(currentUser){
            setCurrentlyLoved(!currentlyLoved);
        }
    }

    const addHandler = () => {
        if (!shoeSize) {
            return alert('Please select a size.')
        }
        addItemToCart(item, shoeSize);
    }

    return (
        <div className="pm-table-container">
            <div className="pm-product-sizes-container">
                {
                    shoeSizes.map((size, id) => {
                        return (<button className={`pm-product-size ${shoeSize === size.toString() && 'active-shoe-size'}`} key={id} value={size} onClick={sizeHandler}>{size}</button>);
                    })
                }
            </div>
            <div className="pm-buttons-container">
            { currentlyLoved ?
                <LovedIconFilled  className="pm-svg-filled" onClick={toggleLovedHandler}/> :
                <LovedIcon  className="pm-svg-icon" onClick={toggleLovedHandler}/>
            }
                <CartIcon className="pm-svg-icon" onClick={addHandler}/> 
            </div>
        </div>
    )
}

export default ProductModalTable;