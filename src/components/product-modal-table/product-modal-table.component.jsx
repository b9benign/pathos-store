import CustomButton from '../custom-button/custom-button.component';
// import {ReactComponent as LovedIcon} from '../../assets/vector-graphics/heart-icon.svg';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';

import './product-modal-table.styles.scss';


const ProductModalTable = ({ item }) => {

    const shoeSizes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
    const { name, brand } = item;
    const { addItemToCart } = useContext(CartContext);
    const [shoeSize, setShoeSize] = useState();


    const sizeHandler = (e) => {
        const { value } = e.target;
        setShoeSize(value);
    }

    const addHandler = () => {
        if (!shoeSize) {
            return alert('Please select a size.')
        }
        addItemToCart(item, shoeSize);
    }

    return (
        <div className="pm-table-container">

            
            <fieldset className="pm-product-info-container">
                <legend><span className="pm-section-title">Quality</span></legend>
                <span>The <span className="pm-info-subspan">{brand} {name}</span> stands as a testament to expert design and manufacturing. Crafted with precision and top-of-the-line materials, it has garnered the adoration of athletes and millions worldwide, setting the standard for excellence.</span>
            </fieldset>

            <fieldset className="pm-add-to-cart-section">
                <legend className="pm-section-title"><span>Get Yours</span></legend>
                <div className="pm-product-sizes-container">
                    {
                        shoeSizes.map((size, id) => {
                            return (<button className={`pm-product-size ${shoeSize === size.toString() && 'active-shoe-size'}`} key={id} value={size} onClick={sizeHandler}>{size}</button>);
                        })
                    }
                </div>
                <div className="pm-buttons-container">
                    <CustomButton buttonType='light'>Save</CustomButton>
                    <CustomButton buttonType='dark' className="pm-button" onClick={addHandler}>Add to Cart</CustomButton>
                </div>
            </fieldset>
        </div>
    )
}

export default ProductModalTable;