import { useState } from 'react';
import { ReactComponent as LovedIcon } from '../../assets/vector-graphics/heart-icon.svg';

import './product-preview.styles.scss';
import ProductModal from '../product-modal/product-modal.component';

const ProductPreview = ({props}) => {

    const {name, id, price, brand, category, gender} = props;
    const [modalState, setModalState] = useState(false);
    const modalUtil = {modalState, setModalState};


    const toggleModal = () => {
        setModalState(true);
    }
    
    return (
        <>
        <div className="product-preview-container" onClick={toggleModal}>


            <div className="product-preview-image-container">
                <img 
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)} 
                    className="product-preview-thumbnail"
                    alt={name}
                    />
                <LovedIcon className="product-preview-heart-icon"/>

                { 
                    (id % 13 === 0 || id % 27 === 0) 
                    ?   (<div className="product-preview-trending-banner">
                            trending
                        </div>)
                    :   ''
                }
            </div>


            <div className="product-preview-info-container">
                <span className="product-preview-title">{brand} {name}</span>
                <span className="product-preview-category">{category}</span>
                <span className="product-preview-price">${price}</span>
            </div>

        </div>

           <ProductModal props={props} modalUtil={modalUtil}/>
        </>
    );
}


export default ProductPreview;