import STORE_DATA from '../../../utils/store-data';
import ProductPreview from '../../product-preview/product-preview.component';
import './store.styles.scss';

const StorePage = () => {

    return (
        
        <div className="store-page-container">
            {STORE_DATA[0].products.map((item) => {
                return <ProductPreview props={item} key={item.id}/>
            })}
            
        </div>
    );
}


export default StorePage;