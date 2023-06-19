import STORE_DATA from '../../../utils/store-data';
import ProductPreview from '../../product-preview/product-preview.component';
import ProductFilter from '../../product-filter/product-filter.component';
import './store.styles.scss';



const StorePage = () => {

    return (
        <div className="store-page-container">
            <span></span>
            <div className="store-page-content-spacer">

                <ProductFilter />
                <div className="store-products-container">
                    {STORE_DATA[0].products.map((item) => {
                        return <ProductPreview props={item} key={item.id}/>
                    })} 
                </div> 

            </div>
        </div>
    );
}


export default StorePage;