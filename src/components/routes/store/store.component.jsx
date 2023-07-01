import ProductPreview from '../../product-preview/product-preview.component';
import ProductFilter from '../../product-filter/product-filter.component';

import { useContext } from 'react';
import { ListContext } from '../../../context/list-context';

import './store.styles.scss';




const StorePage = () => {

    const {filteredProducts} = useContext(ListContext);

    return (
        <div className="store-page-container">
            <div className="store-page-content-spacer">

                <ProductFilter />
                <div className="store-products-container">
                    {filteredProducts.map((item) => {
                        return <ProductPreview item={item} key={item.id}/>
                    })} 
                </div> 

            </div>
        </div>
    );
}


export default StorePage;