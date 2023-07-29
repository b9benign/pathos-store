import { useState, useContext, useEffect } from 'react';
import { ReactComponent as LovedIcon } from '../../assets/vector-graphics/heart-icon.svg';
import { ReactComponent as LovedIconFilled } from '../../assets/vector-graphics/heart-icon-filled.svg';
import { LovedItemContext } from '../../context/loved-context';
import { UserContext } from '../../context/user-context';


import ProductModal from '../product-modal/product-modal.component';

import './product-preview.styles.scss';



const ProductPreview = ({item}) => {

    const {name, id, price, brand, category, gender} = item;
    const [modalState, setModalState] = useState(false);
    const modalUtil = {modalState, setModalState};
    const {toggleIsItemLoved, lovedIdList, fetchLovedIdsList, onLovedList, setOnLovedList} = useContext(LovedItemContext);
    const [currentlyLoved, setCurrentlyLoved] = useState(lovedIdList.includes(id));
    const {currentUser} = useContext(UserContext);

    const toggleModal = () => {
        setModalState(true);
    }
    const toggleLovedHandler = async () => { //bug: when store-page is refreshed, hearted items won't be displayed as such
        toggleIsItemLoved(item);
        await fetchLovedIdsList();
        if(currentUser){
            setCurrentlyLoved(!currentlyLoved);
        }
    }

    useEffect(() => {
        const fetchLovedStatus = () => {
            if(lovedIdList.includes(id)) {
                setOnLovedList(true);

                return setCurrentlyLoved(true);
            }
            setOnLovedList(false);
            setCurrentlyLoved(false);
        }
        return fetchLovedStatus();
    }, [id, currentUser, lovedIdList, setOnLovedList])

    return (
        
        <>
        
        <div className="product-preview-container">
                 
            { currentlyLoved || onLovedList ?
                <LovedIconFilled className="product-preview-heart-filled-icon" onClick={toggleLovedHandler}/> :
                <LovedIcon className="product-preview-heart-icon" onClick={toggleLovedHandler}/>
            }
            <div className="product-preview-image-container"  onClick={toggleModal}>
                <img 
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)} 
                    className="product-preview-thumbnail"
                    alt={name}
                    loading='lazy'
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