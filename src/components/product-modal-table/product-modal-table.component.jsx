import CustomButton from '../custom-button/custom-button.component';
import {ReactComponent as LovedIcon} from '../../assets/vector-graphics/heart-icon.svg';
import './product-modal-table.styles.scss';


const ProductModalTable = ({item}) => {

    const shoeSizes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
    const {name, brand, category, price, id, gender} = item;

    return (
        <div className="pm-table-container">

            <span className="pm-section-title">Quality</span>
            <section className="pm-product-info-container">
                <span>The <span className="pm-info-subspan">{brand} {name}</span> stands as a testament to expert design and manufacturing. Crafted with precision and top-of-the-line materials, it has garnered the adoration of athletes and millions worldwide, setting the standard for excellence.</span>
            </section>
            
            <span className="pm-section-title">Sizes</span>
            <div className="pm-product-sizes-container">
                {
                    shoeSizes.map((size) => {
                        return (<div className="pm-product-size" value={size}>{size}</div>);
                    })
                }
            </div>

      
            <div className="pm-buttons-container">
                <CustomButton buttonType='light'>Save</CustomButton>
                <CustomButton buttonType='dark' className="pm-button">Add to Cart</CustomButton>
            </div>

        </div>
    )
}

export default ProductModalTable;