import { useState } from 'react';
import ProductModalTable from '../product-modal-table/product-modal-table.component';
import ProductModalRotation from '../product-modal-rotation/product-modal-rotation.component';

import './product-modal.styles.scss';

const ProductModal = ({ item, modalUtil }) => {

    const { category, name, brand, gender } = item;
    const { modalState, setModalState } = modalUtil;
    const [activeImage, setActiveImage] = useState('profile');
    const imageToggler = { activeImage, setActiveImage };

    const toggleModal = () => {
        setModalState(false);
        setActiveImage('profile');
    }


    return (
        <>
            {modalState &&
                <div className="product-modal-container">
                    <div className="product-modal-background" onClick={toggleModal} />

                    <div className="product-modal-content-container">
                        <div className="product-modal-content-blur" />
                        <div className="product-modal-general-item-info">
                            <div className="product-modal-item-misc">
                                <span className="product-modal-item-name">{name}</span>
                                <span className="product-modal-item-brand">{brand}</span>
                                <span className="product-modal-item-category">{category}</span>
                            </div>

                            <ProductModalRotation item={item} imageToggler={imageToggler} />
                        </div>

                        <div className="product-modal-images-container">
                            <div className="product-modal-displayed-image">
                                <img
                                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/${activeImage}.webp`)}
                                    className="product-modal-active-image"
                                    alt={`product ${activeImage}`}
                                    loading='lazy'
                                />
                            </div>
                        </div>

                        <ProductModalTable item={item} />

                    </div>
                </div>
            }
        </>
    )
}

export default ProductModal;