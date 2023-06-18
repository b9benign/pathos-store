import { ReactComponent as LovedIcon } from '../../assets/vector-graphics/heart-icon.svg';

import './product-preview.styles.scss';

const ProductPreview = ({props}) => {

    const {name, id, price, brand} = props;
    
    return (
        <div className="product-preview-container">


            <div className="product-preview-image-container">
                <img 
                    src={require(`../../assets/product-images/mens/${brand.toLowerCase()}/thumbnail.webp`)} 
                    className="product-preview-thumbnail"
                    alt={name}
                    />
                <LovedIcon className="product-preview-heart-icon"/>

                { 
                    (id % 13 === 0 || id % 27 === 0) 
                    ?   (<div className="product-preview-trending-banner">
                            trend
                        </div>)
                    :   ''
                }
            </div>


            <div className="product-preview-info-container">
                {name} | {price} | {id}
            </div>

        </div>
    );
}


export default ProductPreview;