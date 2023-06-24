import { useState } from 'react';
import './product-modal.styles.scss';
import ProductModalRotation from '../product-modal-rotation/product-modal-rotation.component';

const ProductModal = ({props, modalUtil}) => {

    const {category, name, brand, gender} = props;
    const {modalState, setModalState} = modalUtil;
    const [activeImage, setActiveImage] = useState('profile');
    const imageToggler = {activeImage, setActiveImage};

    const toggleModal = () => {
        setModalState(false);
    }


    return (
        <>
        { modalState && 
            <div className="product-modal-container">
                <div className="product-modal-background" onClick={toggleModal}/>

                <div className="product-modal-content-container">

                    <div className="product-modal-general-item-info">
                        <div className="product-modal-item-misc">
                            <span className="product-modal-item-name">{name}</span>
                            <span className="product-modal-item-brand">{brand}</span>
                            <span className="product-modal-item-category">{category}</span>
                        </div>

                        <ProductModalRotation props={props} imageToggler={imageToggler}/>
                    </div>





                    <div className="product-modal-images-container">
                        <div className="product-modal-displayed-image">
                            <img 
                                src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/${activeImage}.webp`)}
                                className="product-modal-active-image"
                                alt={`product ${activeImage}`}
                            />
                        </div>
                    </div>

                </div>
            </div>
        }
        </>
    )
}

export default ProductModal;