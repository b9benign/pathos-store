import { useState, useContext } from 'react';
import { ReactComponent as LovedIcon } from '../../assets/vector-graphics/heart-icon.svg';
import { LovedItemContext } from '../../context/loved-context';

import ProductModal from '../product-modal/product-modal.component';

import './product-preview.styles.scss';



const ProductPreview = ({item}) => {

    const {name, id, price, brand, category, gender} = item;
    const [modalState, setModalState] = useState(false);
    const modalUtil = {modalState, setModalState};

    const {toggleIsItemLoved} = useContext(LovedItemContext);

    const toggleModal = () => {
        setModalState(true);
    }
    const toggleLovedHandler = () => {
        toggleIsItemLoved(item);
    }


    return (
        <>
        
        <div className="product-preview-container">

            <LovedIcon className="product-preview-heart-icon" onClick={toggleLovedHandler}/>
            <div className="product-preview-image-container"  onClick={toggleModal}>
                <img 
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)} 
                    className="product-preview-thumbnail"
                    alt={name}
                    />
                

                { 
                    (id % 13 === 0 || id % 27 === 0) 
                    ?   (<div className="product-preview-trending-banner">
                            trending
                        </div>)
                    :   ''
                }
            </div>


            <div className="product-preview-info-container"  onClick={toggleModal}>
                <span className="product-preview-title">{brand} {name}</span>
                <span className="product-preview-category">{category}</span>
                <span className="product-preview-price">${price}</span>
            </div>

        </div>

           <ProductModal item={item} modalUtil={modalUtil}/>
        </>
    );
}


export default ProductPreview;